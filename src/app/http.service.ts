import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }



  getAlluserdetails(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }


  // toget a specific user
  getUserById(userId: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  // delete method
  deleteUser(userId: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }

  // post method
  createRecord(record: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, record);
  }


  // update user
  updateuser(id:any,data:any){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url,data);
  }

  
}
