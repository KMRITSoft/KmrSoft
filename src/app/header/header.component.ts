import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { HeaderService } from './header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  logo : string;
  contacts : Contact[];
  constructor(private _headerService: HeaderService) { 
    this.logo ="./../assets/images/kmr_logo.png";
  }

  ngOnInit() {
    let s = this._headerService.getContactList(); 
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
  }

}
