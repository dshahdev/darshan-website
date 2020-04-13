import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getImageData(): Observable<any> {
    return this.http.get('http://localhost:3000/images', httpOptions);
  }
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/myData', httpOptions);
  }
}
