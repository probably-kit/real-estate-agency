export interface Property {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  area: number;
  city: 'gdansk' | 'sopot' | 'gdynia' | 'rumia' | 'reda';
  primaryMarket: boolean;
}
