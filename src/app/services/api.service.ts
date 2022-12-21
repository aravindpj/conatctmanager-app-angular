import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  baseURL=` http://localhost:3000/contacts`
  constructor(private http:HttpClient) { }

  allContacts():Observable<MyContact>{
     return this.http.get(this.baseURL)
  }

  //function for perticular contact
  viewContact(contactId:string){
    return this.http.get(`${this.baseURL}/${contactId}`)
  }

  //function getting a perticular groupname
  getGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  //funcyion for fetch all group
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups/')
  }

  //function adding new cotact to server
  addContact(contactBody:any){
    return this.http.post(this.baseURL,contactBody)
  }
}
