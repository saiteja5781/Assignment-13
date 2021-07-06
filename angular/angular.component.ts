import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  myImage : any ='assets/images/angular.png'
  constructor() { }

  ngOnInit(): void {
  }

}
