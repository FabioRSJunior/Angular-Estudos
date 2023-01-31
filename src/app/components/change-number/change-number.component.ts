import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})

export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter() 

  constructor() { }
  ngOnInit(): void { }

  handleClick(): void {
    console.log('mudou o numero');
    this.changeNumber.emit()
    // Aqui é feita a transmissão do evento  
    // Aqui é o filho, o pai precisa escutar esse evento 
  }

}
