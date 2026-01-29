// Mock AI suggestion system

const categoryData: Record<string, string[]> = {
  Movies: [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'Pulp Fiction',
    'Forrest Gump',
    'Inception',
    'Fight Club',
    'The Matrix',
    'Goodfellas',
    'The Silence of the Lambs',
  ],
  'TV Shows': [
    'Breaking Bad',
    'Game of Thrones',
    'The Sopranos',
    'The Wire',
    'Friends',
    'The Office',
    'Stranger Things',
    'True Detective',
    'Westworld',
    'The Crown',
  ],
  Books: [
    'To Kill a Mockingbird',
    '1984',
    'Pride and Prejudice',
    'The Great Gatsby',
    'The Catcher in the Rye',
    'Lord of the Flies',
    'Animal Farm',
    'Brave New World',
    'The Hobbit',
    'Harry Potter and the Sorcerer\'s Stone',
  ],
  Songs: [
    'Bohemian Rhapsody - Queen',
    'Imagine - John Lennon',
    'Smells Like Teen Spirit - Nirvana',
    'Billie Jean - Michael Jackson',
    'Hotel California - Eagles',
    'Stairway to Heaven - Led Zeppelin',
    'Hey Jude - The Beatles',
    'Sweet Child O\' Mine - Guns N\' Roses',
    'Thriller - Michael Jackson',
    'Like a Rolling Stone - Bob Dylan',
  ],
  Albums: [
    'The Dark Side of the Moon - Pink Floyd',
    'Abbey Road - The Beatles',
    'Thriller - Michael Jackson',
    'Back in Black - AC/DC',
    'Rumours - Fleetwood Mac',
    'Nevermind - Nirvana',
    'Led Zeppelin IV',
    'The Wall - Pink Floyd',
    'Purple Rain - Prince',
    'Born to Run - Bruce Springsteen',
  ],
  Restaurants: [
    'Le Bernardin',
    'Per Se',
    'Eleven Madison Park',
    'The French Laundry',
    'Alinea',
    'Momofuku',
    'Daniel',
    'Blue Hill',
    'Gramercy Tavern',
    'The NoMad',
  ],
  'Travel Destinations': [
    'Paris, France',
    'Tokyo, Japan',
    'Rome, Italy',
    'Bali, Indonesia',
    'New York City, USA',
    'Barcelona, Spain',
    'Santorini, Greece',
    'Dubai, UAE',
    'London, England',
    'Maldives',
  ],
  'Video Games': [
    'The Legend of Zelda: Breath of the Wild',
    'The Witcher 3: Wild Hunt',
    'Red Dead Redemption 2',
    'The Last of Us',
    'God of War',
    'Elden Ring',
    'Minecraft',
    'Grand Theft Auto V',
    'Portal 2',
    'Half-Life 2',
  ],
  Podcasts: [
    'The Joe Rogan Experience',
    'Serial',
    'This American Life',
    'Radiolab',
    'How I Built This',
    'The Daily',
    'Stuff You Should Know',
    'Crime Junkie',
    'My Favorite Murder',
    'Freakonomics Radio',
  ],
  Hobbies: [
    'Photography',
    'Cooking',
    'Gardening',
    'Painting',
    'Reading',
    'Hiking',
    'Playing Musical Instruments',
    'Writing',
    'Woodworking',
    'Yoga',
  ],
  Foods: [
    'Pizza',
    'Sushi',
    'Tacos',
    'Pasta',
    'Burgers',
    'Ramen',
    'Thai Curry',
    'BBQ Ribs',
    'Chocolate Cake',
    'Ice Cream',
  ],
  Drinks: [
    'Espresso',
    'Green Tea',
    'Fresh Orange Juice',
    'Craft Beer',
    'Red Wine',
    'Whiskey',
    'Mojito',
    'Smoothies',
    'Matcha Latte',
    'Sparkling Water',
  ],
};

export function getAISuggestions(categoryName: string, existingItems: string[]): string[] {
  // Get suggestions from predefined data or generate generic ones
  let pool = categoryData[categoryName] || generateGenericSuggestions(categoryName);
  
  // Filter out existing items
  pool = pool.filter(item => !existingItems.includes(item));
  
  // Return 5 random suggestions
  return shuffleArray(pool).slice(0, 5);
}

export function getAISuggestionsFromPrompt(
  categoryName: string,
  prompt: string,
  existingItems: string[]
): string[] {
  // In a real app, this would call an AI API
  // For now, we'll use a mock implementation that analyzes the prompt
  
  const pool = categoryData[categoryName] || generateGenericSuggestions(categoryName);
  
  // Simple mock: filter based on prompt keywords and exclude existing items
  const keywords = prompt.toLowerCase().split(' ');
  let filtered = pool.filter(item => !existingItems.includes(item));
  
  // If prompt contains specific keywords, try to match them
  if (keywords.some(k => ['action', 'fast', 'intense'].includes(k))) {
    // Prefer items that might match action-oriented content
    filtered = filtered.sort(() => Math.random() - 0.5);
  }
  
  // Return 5 suggestions
  return filtered.slice(0, 5);
}

function generateGenericSuggestions(categoryName: string): string[] {
  return [
    `Popular ${categoryName} #1`,
    `Trending ${categoryName} #2`,
    `Classic ${categoryName} #3`,
    `Recommended ${categoryName} #4`,
    `Fan Favorite ${categoryName} #5`,
    `Must-Try ${categoryName} #6`,
    `Top-Rated ${categoryName} #7`,
    `Hidden Gem ${categoryName} #8`,
  ];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
