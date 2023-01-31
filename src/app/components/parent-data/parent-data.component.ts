import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() Name: string = "";
  @Input() DataUser!: {cargo:string ,acesso:string};

  constructor() { }

  ngOnInit(): void {
  }

}
