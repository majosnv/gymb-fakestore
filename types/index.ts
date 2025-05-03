export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface User {
  // Definuje štruktúru používateľa podľa potreby
  // Pre Fake Store API token je len string, ale môžeme rozšíriť
  token: string;
  username?: string; // Príklad
} 