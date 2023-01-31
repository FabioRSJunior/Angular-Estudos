import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css']
})
export class InputDropdownComponent implements OnInit {

  Dropdown_content = "conteudo" 
  placeholder_text = "texto_placeholder_deuu"
  // tem que ser um array

  constructor() { }

  ngOnInit(): void {
  }

}
