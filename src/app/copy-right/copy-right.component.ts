import { Component, OnInit } from '@angular/core';
import { CopyRightService} from './copy-right.service';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css'],
  providers: [CopyRightService]
})
export class CopyRightComponent implements OnInit {
 message : string;
  constructor(private _copyRightService: CopyRightService) { }

  ngOnInit() {
    let s = this._copyRightService.getMessage(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      //console.log(data);
      let a = data.payload.toJSON(); 
      this.message = a.toString();
      });
  }
}
