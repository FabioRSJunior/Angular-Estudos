import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent implements OnInit {
  myNumber: number = 0;
  

  constructor() { }

  ngOnInit(): void { }

  OnchangeNumber() {
    this.myNumber = this.myNumber+1
    console.log("Deu certo, dentro do OnchangeNumber")
  }

}
