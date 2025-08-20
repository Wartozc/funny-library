import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class Books {
  basePath = 'http://localhost:3000/api/v1/funny-library/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.basePath, {
      headers: this.getHeaderAuthorization(),
    });
  }

  registerBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.basePath}`, book, {
      headers: this.getHeaderAuthorization(),
    });
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.patch<Book>(`${this.basePath}/${book.id}`, book, {
      headers: this.getHeaderAuthorization(),
    });
  }

  deleteBook(bookId: string) {
    return this.http.delete(`${this.basePath}/${bookId}`, {
      headers: this.getHeaderAuthorization(),
    });
  }

  getJwt(): string {
    const jwt = localStorage.getItem('jwt');
    return `Bearer ${jwt}`;
  }

  getHeaderAuthorization(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getJwt()}`,
    });
  }
}
