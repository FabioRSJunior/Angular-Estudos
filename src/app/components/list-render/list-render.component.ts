import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  
  // Nomalmente seria assim: Mas já que criamos o Objeto quue queremos
  // animals: object[] = [{}]
  
  // É obrigatorio que tenhamas todas as propriedades do objeto que criamos,
  // Precisamos adicionar o Age

  animals: Animal[] = [ 
    {name: "toto", type:"dog", age:10},
    {name: "xanim", type:"cat", age:11},
    {name: "girafa", type:"elephant",age:12},
    {name: "chico", type:"chiken",age:13},
    {name: "nina", type:"dog",age:14} ];

  animaldetails = "";  

  constructor() { }

  ngOnInit(): void { }

  //eu sei que o animal tem um interface Animal
  ShowAge(animal: Animal){
    console.log(animal.age)
    this.animaldetails = `o pet ${animal.name} tem: ${animal.age} anos`;
  }

  

}
