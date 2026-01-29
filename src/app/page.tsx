// Page.tsx
'use client'

import { useState } from 'react';
import { CategoryCard } from '@/app/components/CategoryCard';
import { AddCategoryModal } from '@/app/components/AddCategoryModal';
import { AISuggestionsDialog } from '@/app/components/AISuggestionsDialog';
import { UserProfile } from '@/app/components/UserProfile';
import AboutSection from '@/app/components/AboutSection';
import AboutPage from '@/app/about/page';
import { getAISuggestions, getAISuggestionsFromPrompt } from '@/lib/mockAI';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu } from './components/NavigationMenu';

interface Item {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  items: Item[];
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Movies',
      items: [
        { id: 'm1', name: 'The Martian' },
        { id: 'm2', name: 'Arrival' },
      ],
    },
  ]);

  const [userName, setUserName] = useState('User');
  const [userTagline, setUserTagline] = useState('Living my best life, one Top 5 at a time!');
  const [userImage, setUserImage] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F413%2F675%2Foriginal%2Ficon-basic-user-interface-free-vector.jpg&f=1&nofb=1&ipt=cd68d716c31785bbcc04193002b58c7f503640f3574838eabf8659cae2ad4d9e');
  const [aboutText, setAboutText] = useState(
    "Welcome to my Top 5 Lists!\n\nHere you'll find all my favorite things organized into Top 5 lists. Use AI to get suggestions or create your own custom categories!"
  );
  const [bgType, setBgType] = useState<'color' | 'image'>('color');
  const [bgValue, setBgValue] = useState('#e8eef4');

  const [aiSuggestions, setAISuggestions] = useState<string[]>([]);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');

  const addCategory = (name: string) => {
    const newCategory: Category = {
      id: Date.now().toString(),
      name,
      items: [],
    };
    setCategories([...categories, newCategory]);
    toast.success(`Category "${name}" added!`);
  };

  const deleteCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    setCategories(categories.filter((c) => c.id !== categoryId));
    if (category) {
      toast.success(`Category "${category.name}" deleted`);
    }
  };

  const addItem = (categoryId: string, itemName: string) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId && category.items.length < 5) {
          return {
            ...category,
            items: [...category.items, { id: Date.now().toString(), name: itemName }],
          };
        }
        return category;
      })
    );
    toast.success(`Item added!`);
  };

  const editItem = (categoryId: string, itemId: string, newName: string) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: category.items.map((item) =>
              item.id === itemId ? { ...item, name: newName } : item
            ),
          };
        }
        return category;
      })
    );
    toast.success(`Item updated!`);
  };

  const deleteItem = (categoryId: string, itemId: string) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: category.items.filter((item) => item.id !== itemId),
          };
        }
        return category;
      })
    );
    toast.success(`Item deleted`);
  };

  const handleAISuggest = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return;

    const existingItems = category.items.map((item) => item.name);
    const suggestions = getAISuggestions(category.name, existingItems);

    setAISuggestions(suggestions);
    setActiveCategoryId(categoryId);
    setShowAISuggestions(true);
  };

  const handleAIPrompt = (categoryId: string, prompt: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return;

    const existingItems = category.items.map((item) => item.name);
    const suggestions = getAISuggestionsFromPrompt(category.name, prompt, existingItems);

    setAISuggestions(suggestions);
    setActiveCategoryId(categoryId);
    setShowAISuggestions(true);
    toast.success('AI suggestions generated!');
  };

  const handleSelectSuggestion = (suggestion: string) => {
    if (activeCategoryId) {
      addItem(activeCategoryId, suggestion);
    }
  };

  const handleUpdateProfile = (name: string, tagline: string, image: string) => {
    setUserName(name);
    setUserTagline(tagline);
    setUserImage(image);
    toast.success('Profile updated!');
  };

  const handleUpdateBackground = (type: 'color' | 'image', value: string) => {
    setBgType(type);
    setBgValue(value);
    toast.success('Background updated!');
  };

  const activeCategory = categories.find((c) => c.id === activeCategoryId);
  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);

  const backgroundStyle = bgType === 'color'
    ? { backgroundColor: bgValue }
    : { backgroundImage: `url(${bgValue})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' };

  return (
    <>
      <NavigationMenu username={userName} />
      <div className="min-h-screen" style={backgroundStyle}>
        <Toaster />

        {currentPage === 'about' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AboutPage />
          </div>
        ) : (
          <>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  <UserProfile
                    userImage={userImage}
                    userName={userName}
                    tagline={userTagline}
                    onUpdateProfile={handleUpdateProfile}
                    onUpdateBackground={handleUpdateBackground}
                  />

                  <AboutSection
                    aboutText={aboutText}
                    onUpdateAbout={setAboutText}
                    totalLists={categories.length}
                    totalItems={totalItems}
                  />

                  {/* Add Category in Sidebar */}
                  <div className="bg-white border-4 border-[#0066cc] p-4 shadow-[4px_4px_0px_0px_rgba(0,102,204,0.3)]">
                    <h3 className="text-[#0066cc] font-bold mb-3 text-center">Create New List</h3>
                    <AddCategoryModal onAddCategory={addCategory} />
                  </div>
                </div>

                {/* Main Lists Area */}
                <div className="lg:col-span-3">
                  {categories.length === 0 ? (
                    <div className="bg-white border-4 border-[#0066cc] p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,102,204,0.3)]">
                      <div className="text-[#666666] mb-4 text-lg">
                        No categories yet. Add your first category to get started!
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {categories.map((category) => (
                        <CategoryCard
                          key={category.id}
                          category={category}
                          onAddItem={addItem}
                          onEditItem={editItem}
                          onDeleteItem={deleteItem}
                          onDeleteCategory={deleteCategory}
                          onAISuggest={handleAISuggest}
                          onAIPrompt={handleAIPrompt}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
