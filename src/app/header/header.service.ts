import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  contactList:AngularFireList<any>;
  constructor(private firebase :AngularFireDatabase) { }
  getContactList(){
    this.contactList = this.firebase.list('contacts');
    return this.contactList;
  }
}
