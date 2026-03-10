
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface MaterialStat {
  name: string;
  popularity: number;
}

export interface CartItem extends ServiceItem {
  quantity: number;
}
