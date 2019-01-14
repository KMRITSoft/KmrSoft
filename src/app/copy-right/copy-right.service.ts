import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Contact } from '../model/contact';
@Injectable({
  providedIn: 'root'
})
export class CopyRightService {
  message:AngularFireObject<any>;
  constructor(private firebase :AngularFireDatabase) { }
  getMessage(){
    this.message = this.firebase.object('copyright');
    return this.message;
  }
}
