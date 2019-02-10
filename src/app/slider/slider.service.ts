import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  sliderList: AngularFireList<any>;
  constructor(private firebase :AngularFireDatabase ) { }
  getSliders(){
    this.sliderList = this.firebase.list('sliders');
    return this.sliderList;
  }
}
