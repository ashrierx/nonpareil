// AICategoryModal.tsx

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

const PREDEFINED_CATEGORIES = [
  'Movies',
  'TV Shows',
  'Books',
  'Songs',
  'Albums',
  'Restaurants',
  'Travel Destinations',
  'Video Games',
  'Podcasts',
  'Hobbies',
  'Foods',
  'Drinks',
];

interface AddCategoryModalProps {
  onAddCategory: (categoryName: string) => void;
}

export function AddCategoryModal({ onAddCategory }: AddCategoryModalProps) {
  const [open, setOpen] = useState(false);
  const [customName, setCustomName] = useState('');
  const [selectedTab, setSelectedTab] = useState<'predefined' | 'custom'>('predefined');

  const handleAddPredefined = (name: string) => {
    onAddCategory(name);
    setOpen(false);
  };

  const handleAddCustom = () => {
    if (customName.trim()) {
      onAddCategory(customName.trim());
      setCustomName('');
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-[#ff6600] to-[#ff3300] hover:from-[#ff7711] hover:to-[#ff4411] text-white font-bold border-2 border-[#cc2200] shadow-[4px_4px_0px_0px_rgba(204,34,0,0.5)]"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl border-4 border-[#0066cc]">
        <DialogHeader>
          <DialogTitle className="text-[#0066cc] text-xl">Add New Category</DialogTitle>
          <DialogDescription>
            Choose from predefined categories or create your own custom category.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Button
              onClick={() => setSelectedTab('predefined')}
              variant={selectedTab === 'predefined' ? 'default' : 'outline'}
              className={selectedTab === 'predefined' 
                ? 'flex-1 bg-[#0066cc] text-white border-2 border-[#003d7a]' 
                : 'flex-1 border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#e8f0ff]'}
            >
              Predefined
            </Button>
            <Button
              onClick={() => setSelectedTab('custom')}
              variant={selectedTab === 'custom' ? 'default' : 'outline'}
              className={selectedTab === 'custom' 
                ? 'flex-1 bg-[#0066cc] text-white border-2 border-[#003d7a]' 
                : 'flex-1 border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#e8f0ff]'}
            >
              Custom
            </Button>
          </div>

          {selectedTab === 'predefined' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2">
              {PREDEFINED_CATEGORIES.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleAddPredefined(category)}
                  variant="outline"
                  className="h-auto py-4 border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white font-bold"
                >
                  {category}
                </Button>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="custom-category" className="text-[#0066cc] font-bold">Category Name</Label>
                <Input
                  id="custom-category"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Enter custom category name..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddCustom();
                  }}
                  className="border-2 border-[#0066cc]"
                />
              </div>
              <Button onClick={handleAddCustom} className="w-full bg-[#0066cc] hover:bg-[#0052a3] border-2 border-[#003d7a] font-bold">
                <Plus className="h-4 w-4 mr-2" />
                Create Category
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
