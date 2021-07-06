import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javafeatures',
  templateUrl: './javafeatures.component.html',
  styleUrls: ['./javafeatures.component.css']
})
export class JavafeaturesComponent implements OnInit {

  myImage : any ='assets/images/feature.png'
  constructor() { }

  ngOnInit(): void {
  }

}
