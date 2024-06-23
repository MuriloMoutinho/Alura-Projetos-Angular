import { ImageLinks, Item, Livro } from './interfaces';

export class LivroVolumeInfo implements Livro{
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: Date;
  description?: string;
  previewLink?: string;
  thumbnail?: string;

  constructor(item: Item) {
    this.title = item.volumeInfo?.title;
    this.authors = item.volumeInfo?.authors;
    this.publisher = item.volumeInfo?.publisher;
    this.publishedDate = item.volumeInfo?.publishedDate;
    this.description = item.volumeInfo?.description;
    this.previewLink = item.volumeInfo?.previewLink;
    this.thumbnail = item.volumeInfo?.imageLinks.thumbnail;
  }
}
