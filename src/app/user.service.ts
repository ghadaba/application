import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private httpOptions = {
    headers: new HttpHeaders({ 
    })
  };
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
   
    return this.http.post<User> (`${this.baseUrl}`+'/user', user);
  }
 
  updateUser(id: number, user:User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`+'/user', user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

   

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/users');
  }
}
