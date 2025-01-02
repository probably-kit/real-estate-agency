export interface Property {
  id: string;
  imageUrl: string;         
  images?: string[];         
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  area: number;
  city: string;
  primaryMarket: boolean;
}
