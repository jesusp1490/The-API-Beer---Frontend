export interface Beer {
  _id?: string;
  name: string;
  category: string;
  country: string;
  ingredients: string[];
  price: number;
  description: string;
  imageUrl: string;
}