import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../interfaces/book';
import { Loan } from '../../interfaces/loan';
import { Users } from '../../services/users';
import { JwtPayload } from '../../interfaces/jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  books: Book[] = [
    {
      id: '',
      title: 'El Quijote',
      author: 'Miguel de Cervantes',
      year: 1605,
      description: 'Una de las obras más destacadas de la literatura universal.',
      image: 'library.jpeg',
      category: 'Novela',
      state: 'available',
    },
    {
      id: '',
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      year: 1967,
      description: 'Historia de la familia Buendía en Macondo.',
      image: 'library.jpeg',
      category: 'Realismo mágico',
      state: 'loaned',
    },
    {
      id: '',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      year: 2008,
      description: 'Guía para escribir código limpio y mantenible.',
      image: 'library.jpeg',
      category: 'Programación',
      state: 'available',
    },
  ];

  filteredBooks: Book[] = [];
  selectedState: string = 'all';
  selectedCategory: string = 'all';
  categories: string[] = [];

  selectedBook: Book | null = null;
  loan: Loan = {
    id: '',
    bookId: '',
    documentNumberUser: '',
    bookName: '',
    userName: '',
    loanDate: '',
    loanTime: 0,
  };

  isUserAdmin: boolean = false;
  user: JwtPayload | null = null;

  constructor(private userService: Users, private router: Router) {
    const token = localStorage.getItem('jwt');
    this.user = userService.getUserRole(token!);

    if (this.user?.rol === 'admin') this.isUserAdmin = true;
  }

  ngOnInit(): void {
    this.filteredBooks = [...this.books];
    this.categories = Array.from(new Set(this.books.map((b) => b.category)));
  }

  filterBooks() {
    this.filteredBooks = this.books.filter((book) => {
      const stateMatch = this.selectedState === 'all' || book.state === this.selectedState;
      const categoryMatch =
        this.selectedCategory === 'all' || book.category === this.selectedCategory;
      return stateMatch && categoryMatch;
    });
  }

  openLoanModal(book: Book) {
    this.selectedBook = book;
    this.loan = {
      id: '',
      bookId: book.title + '-' + Math.random().toString(36).substring(2, 9),
      documentNumberUser: '',
      bookName: book.title,
      userName: '',
      loanDate: '',
      loanTime: 0,
    };

    const modal = new bootstrap.Modal(document.getElementById('loanModal'));
    modal.show();
  }

  submitLoan() {
    console.log('Préstamo registrado:', this.loan);
    if (this.selectedBook) {
      this.selectedBook.state = 'loaned';
      this.filterBooks();
    }

    const modal = bootstrap.Modal.getInstance(document.getElementById('loanModal'));
    modal.hide();
  }

  logout() {
    this.userService.logout();
  }

  goToMaintenances() {
    this.router.navigateByUrl('/maintenances');
  }
}
