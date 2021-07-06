import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corejava',
  templateUrl: './corejava.component.html',
  styleUrls: ['./corejava.component.css']
})
export class CorejavaComponent implements OnInit {

  myImage:string = 'assets/images/java.png'
  constructor() { }

  ngOnInit(): void {
  }

}
