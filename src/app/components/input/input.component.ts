import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() placeholder_text = 'place_holder_defaul';
  @Input() id = 'default';

  constructor() { }

  ngOnInit(): void {}
  printainput(): void {
    // console.log(this.placeholder_text)
  }

  



}
