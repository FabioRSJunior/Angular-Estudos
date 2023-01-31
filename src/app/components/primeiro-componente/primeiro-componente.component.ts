import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})

export class PrimeiroComponenteComponent implements OnInit {

  // AQUI SÃO CRIADOS OS ATRIBUTOS
  nome_da_variavel: string = 'Fabio';
  idade: number = 20;
  hobbies = ["Estudar","Trabalhar","Academia"];
  classeCarro = { nome: "fusca", ano: 2000 };
  
  userName = 'Jaoquim';
  DataUser = {cargo:"chefão", acesso:"Privilegiado"};

  constructor() { }

  ngOnInit(): void {
  }

}
