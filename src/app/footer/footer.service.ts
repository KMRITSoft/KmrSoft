import { Injectable } from '@angular/core';
import { AngularFireObject,AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  message: AngularFireObject<any>;
  contactList:AngularFireList<any>;
  constructor(private firebase :AngularFireDatabase) { }
  getContactList(){
    this.contactList = this.firebase.list('contacts');
    return this.contactList;
  }
  getMessage(){
    this.message = this.firebase.object('aboutus');
    return this.message;
  }
}
