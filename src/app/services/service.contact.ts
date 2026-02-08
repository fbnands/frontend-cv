import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactRequest } from '../models/contact.request';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactRequest) {
    return this.http.post(this.apiUrl, contact);
  }
}
