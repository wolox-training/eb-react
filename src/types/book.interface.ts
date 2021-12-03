export interface IBook {
  id: number;
  author: string;
  title: string;
  year: string;
  editor: string;
  genre: string;
  imageUrl: string;
}

export interface IBookResponse {
  count: number;
  page: IBook[];
}