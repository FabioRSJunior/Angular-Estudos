import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  
  @Input() placeholder_textbox = "placeholder_text_default" 
  @Input() id = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
