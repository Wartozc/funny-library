import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-maintenances-books',
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenances-books.html',
  styleUrl: './maintenances-books.scss',
})
export class MaintenancesBooks {
  books: Book[] = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      year: 2008,
      description: 'A Handbook of Agile Software Craftsmanship',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL._SX374_BO1,204,203,200_.jpg',
      category: 'Software',
      state: 'available',
    },
  ];

  selectedBook: Book | null = null;
  modalOpen = false;
  isEditMode = false;

  openModal(book?: Book) {
    this.isEditMode = !!book;
    this.selectedBook = book
      ? { ...book }
      : {
          title: '',
          author: '',
          year: new Date().getFullYear(),
          description: '',
          image: '',
          category: '',
          state: 'available',
        };
    this.modalOpen = true;
  }

  saveBook() {
    if (this.isEditMode && this.selectedBook) {
      const index = this.books.findIndex((b) => b.title === this.selectedBook!.title);
      this.books[index] = this.selectedBook!;
    } else {
      this.books.push(this.selectedBook!);
    }
    this.closeModal();
  }

  deleteBook(book: Book) {
    this.books = this.books.filter((b) => b !== book);
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedBook = null;
  }
}
