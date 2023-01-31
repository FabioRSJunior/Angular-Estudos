import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  disabled: true | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
