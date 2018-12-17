import { Component, OnInit } from '@angular/core';
import { Batch } from '../model/batch';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit {
 batches: Batch[];
  constructor() { }

  ngOnInit() {
    this.batches =[
      new Batch("SAP","online classroom training starting shortly."),
      new Batch("Tableau","online classroom training starting shortly."),
      new Batch("Angular","online classroom training starting shortly.")
    ];
  }

}
