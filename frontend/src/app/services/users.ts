import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Users {
  basePath = 'http://localhost:3000/api/v1/funny-library/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.basePath, {
      headers: this.getHeaderAuthorization(),
    });
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.basePath}/register`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.basePath}/${user.id}`, user, {
      headers: this.getHeaderAuthorization(),
    });
  }

  deleteUser(userId:string){
    return this.http.delete(`${this.basePath}/${userId}`, {
      headers: this.getHeaderAuthorization(),
    });
  }

  getJwt() {
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhcnRvemNAZ21haWwuY29tIiwicm9sIjoiYWRtaW4iLCJ1c2VyTmFtZSI6IldhbHRoZXIgWmFwYXRhIiwiaWF0IjoxNzU1NjM2ODExLCJleHAiOjE3NTU2NDA0MTF9.LLAccP1Z063LHiyVELMcV6AkwB9lRjyaBnAkrACJnV4';
    return `Bearer ${jwt}`;
  }

  getHeaderAuthorization(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getJwt()}`,
    });
  }
}
