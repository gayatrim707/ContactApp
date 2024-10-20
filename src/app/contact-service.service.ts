import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiUrl = 'http://localhost:5068/api/Contacts'; // .NET Core API URL

  constructor(private http: HttpClient) {}
  
  getContacts(): Observable<any>{
    return  this.http.get(this.apiUrl);
   }
   getContactsById(contact: Contact){
    return this.http.get<Contact>(this.apiUrl+"/"+contact.id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
    //return this.http.get(this.apiUrl+"/"+contact.id);
  }
  createContact(contact: any): Observable<any> {
    // return this.http.post<Contact>(this.apiUrl, contact, {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    // });
    return  this.http.post(this.apiUrl, contact)
  }
  deleteContact(Id:number): Observable<any>{
    return this.http.delete(this.apiUrl+"/"+Id);
  }
  UpdateContact(Id:number,contact: Contact): Observable<any> {
    return this.http.put<Contact>(this.apiUrl+"/"+Id, contact, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
export interface Contact {
  id?: number;
  FirstName: string;
  LastName: string;
  Email: string;
}