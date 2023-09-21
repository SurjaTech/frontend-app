import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  signup(payload: any) : Observable<any>{
    const url = `http://localhost:8080/signup`;
    alert(url);
    return this.http.post<any>(url, payload)
    
  }
}
