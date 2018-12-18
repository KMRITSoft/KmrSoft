import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Batch} from './../model/batch';

@Injectable({
  providedIn: 'root'
})
export class MarqueeService {
  batchList: AngularFireList<any>;
  constructor(private firebase :AngularFireDatabase ) { }
  getBatchList(){
    this.batchList = this.firebase.list('marquees');
    return this.batchList;
  }
}
