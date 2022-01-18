import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  baseUrl: string = 'https://hidden-cliffs-42305.herokuapp.com/api/';
  constructor(private http: HttpClient) { }

  sendValidation(infoObj:any){
    return this.http.post(this.baseUrl + 'review', infoObj);
  }
}
