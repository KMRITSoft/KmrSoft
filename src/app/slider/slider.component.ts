import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Slider} from '../model/slider';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliders : Slider[];
  images;
    constructor(config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      config.interval = 10000;
      config.wrap = false;
      config.keyboard = false;
      config.pauseOnHover = false;
    }

  ngOnInit() {
    this.sliders = [
      new Slider("./../assets/images/training1.png","Image Description1","Title1","SubTitle1"),
      new Slider("./../assets/images/training2.png","Image Description2","Title2","SubTitle2"),
      new Slider("./../assets/images/training3.png","Image Description3","Title3","SubTitle3"),
    ];
    let event = this;
    this.images=[];
    this.sliders.forEach(function(slider){
      event.images.push(slider.path);
    });
  }

}
