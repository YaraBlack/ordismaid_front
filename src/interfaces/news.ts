export interface News {
  id: string;
  message: string;
  link: string;
  imageLink: string;
  priority: boolean;
  date: string;
  translations: Record<string, string>;
  update: boolean;
  primeAccess: boolean;
  stream: boolean;
  mobileOnly: boolean;
}
