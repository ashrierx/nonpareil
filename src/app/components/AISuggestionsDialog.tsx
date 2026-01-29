// AISuggestionsDialog.tsx

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AISuggestionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categoryName: string;
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
}

export function AISuggestionsDialog({
  open,
  onOpenChange,
  categoryName,
  suggestions,
  onSelectSuggestion,
}: AISuggestionsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-4 border-[#0066cc]">
        <DialogHeader>
          <DialogTitle className="text-[#0066cc] text-xl">AI Suggestions for {categoryName}</DialogTitle>
          <DialogDescription>
            Click on a suggestion to add it to your list.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              onClick={() => {
                onSelectSuggestion(suggestion);
                onOpenChange(false);
              }}
              variant="outline"
              className="w-full justify-start h-auto py-3 border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white font-bold"
            >
              <Check className="h-4 w-4 mr-2" />
              <span>{suggestion}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
