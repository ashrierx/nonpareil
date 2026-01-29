// CategoryCard.tsx

import { useState } from 'react';
import { Edit, Trash2, Plus, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Item {
  id: string;
  name: string;
}

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    items: Item[];
  };
  onAddItem: (categoryId: string, itemName: string) => void;
  onEditItem: (categoryId: string, itemId: string, newName: string) => void;
  onDeleteItem: (categoryId: string, itemId: string) => void;
  onDeleteCategory: (categoryId: string) => void;
  onAISuggest: (categoryId: string) => void;
  onAIPrompt: (categoryId: string, prompt: string) => void;
}

export function CategoryCard({
  category,
  onAddItem,
  onEditItem,
  onDeleteItem,
  onDeleteCategory,
  onAISuggest,
  onAIPrompt,
}: CategoryCardProps) {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editingItemName, setEditingItemName] = useState('');
  const [showAIPrompt, setShowAIPrompt] = useState(false);
  const [aiPrompt, setAIPrompt] = useState('');

  const handleAddItem = () => {
    if (newItemName.trim() && category.items.length < 5) {
      onAddItem(category.id, newItemName.trim());
      setNewItemName('');
      setIsAddingItem(false);
    }
  };

  const handleEditItem = () => {
    if (editingItemId && editingItemName.trim()) {
      onEditItem(category.id, editingItemId, editingItemName.trim());
      setEditingItemId(null);
      setEditingItemName('');
    }
  };

  const handleAIPromptSubmit = () => {
    if (aiPrompt.trim()) {
      onAIPrompt(category.id, aiPrompt.trim());
      setAIPrompt('');
      setShowAIPrompt(false);
    }
  };

  return (
    <div className="bg-white border-4 border-[#0066cc] shadow-[4px_4px_0px_0px_rgba(0,102,204,0.3)]">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-[#6699cc] to-[#336699] p-3 flex items-center justify-between border-b-2 border-[#0066cc]">
        <h2 className="text-white text-lg font-bold">{category.name}</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDeleteCategory(category.id)}
          className="text-white hover:text-red-300 hover:bg-white/20"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-2">
        {category.items.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-gradient-to-r from-[#e8f0ff] to-[#d4e1f0] border-2 border-[#0066cc] p-2 group"
          >
            <span className="text-[#0066cc] font-bold min-w-[24px]">#{index + 1}</span>
            {editingItemId === item.id ? (
              <Input
                value={editingItemName}
                onChange={(e) => setEditingItemName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleEditItem();
                  if (e.key === 'Escape') setEditingItemId(null);
                }}
                onBlur={handleEditItem}
                autoFocus
                className="flex-1 border-2 border-[#0066cc]"
              />
            ) : (
              <span className="flex-1 text-[#333333] font-bold">{item.name}</span>
            )}
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setEditingItemId(item.id);
                  setEditingItemName(item.name);
                }}
                className="h-7 w-7 text-[#0066cc] hover:bg-[#0066cc] hover:text-white"
              >
                <Edit className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDeleteItem(category.id, item.id)}
                className="h-7 w-7 text-[#cc0000] hover:bg-[#cc0000] hover:text-white"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
        
        {/* Empty slots */}
        {Array.from({ length: 5 - category.items.length }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="flex items-center gap-2 bg-[#f5f5f5] border-2 border-dashed border-[#999999] p-2"
          >
            <span className="text-[#999999] font-bold min-w-[24px]">
              #{category.items.length + index + 1}
            </span>
            <span className="text-[#999999] italic">Empty slot</span>
          </div>
        ))}
      </div>

      <div className="p-4 pt-0">
        {isAddingItem ? (
          <div className="flex gap-2 mb-3">
            <Input
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter item name..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddItem();
                if (e.key === 'Escape') {
                  setIsAddingItem(false);
                  setNewItemName('');
                }
              }}
              autoFocus
              className="flex-1 border-2 border-[#0066cc]"
            />
            <Button onClick={handleAddItem} size="sm" className="bg-[#0066cc] hover:bg-[#0052a3] text-white border-2 border-[#003d7a]">
              Add
            </Button>
            <Button
              onClick={() => {
                setIsAddingItem(false);
                setNewItemName('');
              }}
              variant="outline"
              size="sm"
              className="border-2 border-[#0066cc] text-[#0066cc]"
            >
              Cancel
            </Button>
          </div>
        ) : (
          category.items.length < 5 && (
            <Button
              onClick={() => setIsAddingItem(true)}
              variant="outline"
              className="w-full mb-3 border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white font-bold"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          )
        )}

        <div className="flex gap-2">
          <Button
            onClick={() => onAISuggest(category.id)}
            size="sm"
            className="flex-1 bg-gradient-to-r from-[#ffcc00] to-[#ff9900] hover:from-[#ffdd33] hover:to-[#ffaa00] text-[#333333] font-bold border-2 border-[#cc9900] shadow-[2px_2px_0px_0px_rgba(204,153,0,0.5)]"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            AI Suggest
          </Button>
          <Button
            onClick={() => setShowAIPrompt(true)}
            size="sm"
            className="flex-1 bg-gradient-to-r from-[#ffcc00] to-[#ff9900] hover:from-[#ffdd33] hover:to-[#ffaa00] text-[#333333] font-bold border-2 border-[#cc9900] shadow-[2px_2px_0px_0px_rgba(204,153,0,0.5)]"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            AI Prompt
          </Button>
        </div>
      </div>

      <Dialog open={showAIPrompt} onOpenChange={setShowAIPrompt}>
        <DialogContent className="border-4 border-[#0066cc]">
          <DialogHeader>
            <DialogTitle className="text-[#0066cc]">AI Suggestions with Custom Prompt</DialogTitle>
            <DialogDescription>
              Tell the AI what you like, and it will suggest items for your {category.name} list.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              value={aiPrompt}
              onChange={(e) => setAIPrompt(e.target.value)}
              placeholder="E.g., 'I like action movies with strong characters'"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAIPromptSubmit();
              }}
              className="border-2 border-[#0066cc]"
            />
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setShowAIPrompt(false)} variant="outline" className="border-2 border-[#0066cc]">
                Cancel
              </Button>
              <Button onClick={handleAIPromptSubmit} className="bg-[#0066cc] hover:bg-[#0052a3]">
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Suggestions
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
