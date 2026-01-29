// AboutSection.tsx

import { useState } from 'react';
import { Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AboutSectionProps {
  aboutText: string;
  onUpdateAbout: (text: string) => void;
  totalLists: number;
  totalItems: number;
}

export default function AboutSection({ aboutText, onUpdateAbout, totalLists, totalItems }: AboutSectionProps) {
  const [showEdit, setShowEdit] = useState(false);
  const [editText, setEditText] = useState(aboutText);

  const handleSave = () => {
    onUpdateAbout(editText);
    setShowEdit(false);
  };

  return (
    <>
      <div className="bg-white border-4 border-[#0066cc] shadow-[4px_4px_0px_0px_rgba(0,102,204,0.3)]">
        <div className="bg-linear-to-r from-[#6699cc] to-[#336699] p-3 border-b-2 border-[#0066cc] flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">About My Lists</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setEditText(aboutText);
              setShowEdit(true);
            }}
            className="text-white hover:bg-white/20 h-8 w-8"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <p className="text-[#333333] mb-2 whitespace-pre-wrap">
            {aboutText}
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="text-[#0066cc] font-bold">Total Lists:</span>
            <span className="text-[#333333]">{totalLists}</span>
            <span className="text-[#999999]">•</span>
            <span className="text-[#0066cc] font-bold">Total Items:</span>
            <span className="text-[#333333]">{totalItems}</span>
          </div>
        </div>
      </div>

      <Dialog open={showEdit} onOpenChange={setShowEdit}>
        <DialogContent className="border-4 border-[#0066cc]">
          <DialogHeader>
            <DialogTitle className="text-[#0066cc]">Edit About Section</DialogTitle>
            <DialogDescription>
              Customize your about text to tell people about your lists
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              rows={6}
              className="border-2 border-[#0066cc] resize-none"
              placeholder="Tell people about your lists..."
            />
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setShowEdit(false)} variant="outline" className="border-2 border-[#0066cc]">
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-[#0066cc] hover:bg-[#0052a3]">
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
