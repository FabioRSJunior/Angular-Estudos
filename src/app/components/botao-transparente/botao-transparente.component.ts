import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-transparente',
  templateUrl: './botao-transparente.component.html',
  styleUrls: ['./botao-transparente.component.css']
})
export class BotaoTransparenteComponent implements OnInit {

  disabled: true | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
