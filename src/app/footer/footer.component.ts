import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {
  aboutUs : string;
  contacts : Contact[]; 
  constructor(private _footerService: FooterService) { }

  ngOnInit() {
    let s = this._footerService.getContactList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.contacts = [];
      //console.log(data);
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        console.log(a);
        this.contacts.push(a as Contact);
      });
  });
    let a = this._footerService.getMessage();
    a.snapshotChanges().subscribe(data => {
      let x = data.payload.toJSON();
      this.aboutUs = x.toString();
    })   
  }

}
