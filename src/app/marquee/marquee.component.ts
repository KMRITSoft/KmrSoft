import { Component, OnInit } from '@angular/core';
import { Batch } from '../model/batch';
import { MarqueeService } from './marquee.service';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css'],
  providers: [MarqueeService]
})
export class MarqueeComponent implements OnInit {
 batches: Batch[];
  constructor(private _marqueeService: MarqueeService) { }

  ngOnInit() {
  /*  this.batches =[
      new Batch("SAP","online classroom training starting shortly."),
      new Batch("Tableau","online classroom training starting shortly."),
      new Batch("Angular","online classroom training starting shortly.")
    ];*/
    let s = this._marqueeService.getBatchList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.batches = [];
     // console.log(data);
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        console.log(a);
        this.batches.push(a as Batch);
      });
  });
}
}
