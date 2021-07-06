import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advjava',
  templateUrl: './advjava.component.html',
  styleUrls: ['./advjava.component.css']
})
export class AdvjavaComponent implements OnInit {

  myImage:string = 'assets/images/spring.png'
  constructor() { }

  ngOnInit(): void {
  }

}
