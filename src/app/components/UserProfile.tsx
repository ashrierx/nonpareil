// UserProfile.tsx

import { useState } from 'react';
import { Edit, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface UserProfileProps {
  userImage: string;
  userName: string;
  tagline: string;
  onUpdateProfile: (userName: string, tagline: string, userImage: string) => void;
  onUpdateBackground: (bgType: 'color' | 'image', value: string) => void;
}

export function UserProfile({
  userImage,
  userName,
  tagline,
  onUpdateProfile,
  onUpdateBackground,
}: UserProfileProps) {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditBg, setShowEditBg] = useState(false);
  const [editName, setEditName] = useState(userName);
  const [editTagline, setEditTagline] = useState(tagline);
  const [editImage, setEditImage] = useState(userImage);
  const [bgColor, setBgColor] = useState('#e8eef4');
  const [bgImage, setBgImage] = useState('');
  const [bgType, setBgType] = useState<'color' | 'image'>('color');

  const handleSaveProfile = () => {
    onUpdateProfile(editName, editTagline, editImage);
    setShowEditProfile(false);
  };

  const handleSaveBackground = () => {
    onUpdateBackground(bgType, bgType === 'color' ? bgColor : bgImage);
    setShowEditBg(false);
  };

  return (
    <>
      <div className="bg-white border-4 border-[#0066cc] shadow-[4px_4px_0px_0px_rgba(0,102,204,0.3)]">
        <div className="bg-linear-to-r from-[#6699cc] to-[#336699] p-3 border-b-2 border-[#0066cc] flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">My Profile</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setEditName(userName);
                setEditTagline(tagline);
                setEditImage(userImage);
                setShowEditProfile(true);
              }}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowEditBg(true)}
              className="text-white hover:bg-white/20 text-xs"
            >
              Change BG
            </Button>
          </div>
        </div>
        <div className="p-4 flex items-start gap-4">
          <img
            src={userImage}
            alt={userName}
            className="w-24 h-24 border-4 border-[#0066cc] object-cover"
          />
          <div className="flex-1">
            <h3 className="text-[#0066cc] font-bold text-xl mb-1">{userName}</h3>
            <p className="text-[#666666] text-sm italic mb-2">&quot;{tagline}&quot;</p>
            <div className="text-xs text-[#999999]">
              Member since 2026 • Last login: Just now
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Dialog */}
      <Dialog open={showEditProfile} onOpenChange={setShowEditProfile}>
        <DialogContent className="border-4 border-[#0066cc]">
          <DialogHeader>
            <DialogTitle className="text-[#0066cc]">Edit Profile</DialogTitle>
            <DialogDescription>
              Customize your profile information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-[#0066cc] font-bold">Username</Label>
              <Input
                id="username"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border-2 border-[#0066cc]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline" className="text-[#0066cc] font-bold">Tagline</Label>
              <Input
                id="tagline"
                value={editTagline}
                onChange={(e) => setEditTagline(e.target.value)}
                className="border-2 border-[#0066cc]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image" className="text-[#0066cc] font-bold">Profile Image URL</Label>
              <Input
                id="image"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
                placeholder="https://..."
                className="border-2 border-[#0066cc]"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setShowEditProfile(false)} variant="outline" className="border-2 border-[#0066cc]">
                Cancel
              </Button>
              <Button onClick={handleSaveProfile} className="bg-[#0066cc] hover:bg-[#0052a3]">
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Background Dialog */}
      <Dialog open={showEditBg} onOpenChange={setShowEditBg}>
        <DialogContent className="border-4 border-[#0066cc]">
          <DialogHeader>
            <DialogTitle className="text-[#0066cc]">Customize Background</DialogTitle>
            <DialogDescription>
              Choose a background color or image for your page
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                onClick={() => setBgType('color')}
                variant={bgType === 'color' ? 'default' : 'outline'}
                className={bgType === 'color' 
                  ? 'flex-1 bg-[#0066cc] text-white border-2 border-[#003d7a]' 
                  : 'flex-1 border-2 border-[#0066cc] text-[#0066cc]'}
              >
                Solid Color
              </Button>
              <Button
                onClick={() => setBgType('image')}
                variant={bgType === 'image' ? 'default' : 'outline'}
                className={bgType === 'image' 
                  ? 'flex-1 bg-[#0066cc] text-white border-2 border-[#003d7a]' 
                  : 'flex-1 border-2 border-[#0066cc] text-[#0066cc]'}
              >
                Background Image
              </Button>
            </div>

            {bgType === 'color' ? (
              <div className="space-y-2">
                <Label htmlFor="bgcolor" className="text-[#0066cc] font-bold">Background Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="bgcolor"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-20 h-10 border-2 border-[#0066cc] cursor-pointer"
                  />
                  <Input
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="flex-1 border-2 border-[#0066cc]"
                  />
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                  {['#e8eef4', '#ffccff', '#ccffff', '#ffffcc', '#ffcccc', '#ccffcc'].map(color => (
                    <button
                      key={color}
                      onClick={() => setBgColor(color)}
                      className="w-10 h-10 border-2 border-[#0066cc] hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="bgimage" className="text-[#0066cc] font-bold">Background Image URL</Label>
                <Input
                  id="bgimage"
                  value={bgImage}
                  onChange={(e) => setBgImage(e.target.value)}
                  placeholder="https://..."
                  className="border-2 border-[#0066cc]"
                />
                <p className="text-xs text-[#666666]">
                  Tip: Use a tiled pattern or gradient image for best results
                </p>
              </div>
            )}

            <div className="flex gap-2 justify-end">
              <Button onClick={() => setShowEditBg(false)} variant="outline" className="border-2 border-[#0066cc]">
                Cancel
              </Button>
              <Button onClick={handleSaveBackground} className="bg-[#0066cc] hover:bg-[#0052a3]">
                Apply Background
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
