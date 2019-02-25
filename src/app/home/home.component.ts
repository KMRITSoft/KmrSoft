import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
kmrLogo: string;
  constructor() { }

  ngOnInit() {
    this.kmrLogo="https://firebasestorage.googleapis.com/v0/b/kmrit-22afe.appspot.com/o/kmr_logo.png?alt=media&token=aa12d705-0c58-415c-a240-b1bfdf738a20";
  }
}
