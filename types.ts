
export interface Thought {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Insight {
  id: string;
  type: 'image' | 'link' | 'quote';
  title: string;
  description: string;
  detailedContent?: string;
  date: string;
  url?: string;
  imageUrl?: string;
}

export type PageType = 'home' | 'thoughts' | 'insights';
