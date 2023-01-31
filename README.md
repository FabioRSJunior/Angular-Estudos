# Angular

# CursoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

Caderno de laboratório de Angular, desenvolvido seguindo os seguintes materiais:  

[](https://www.youtube.com/watch?v=vJt_K1bFUeA&list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw)

Complemento dos estudos:

[Curso Angular #01: Introdução](https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G)

## Comandos Uteis:

```bash
#Instale o Node 
#https://nodejs.org/en/download/

#Instalando Angular
sudo su
npm install -g @angular/cli

#Criando projeto:
ng new <nome>
#selecione a opção css

#Testanto aplicação: 
#Dentro do VS code, utilize um terminal integrado e execute:
ng serve

#Parando a aplicação:
crtl + c
```

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Estruturas do Projeto:

node_modules ⇒ Dependências do projeto   

src ⇒ código em sí 

src/app ⇒ onde se cria e inicia componentes. Pasta princial de componentes  

Componentes:

- TS ⇒ logica da aplicação, controler.
- HTML ⇒ template view.
- CSS ⇒ Estiliza o HTML.
- TESTES ⇒ Os componentes podem ser testados.

### Modificando a pagina principal:

Basta modificar o arquivo app.component.html dentro da pasta src

### Componentes

Todos os arquivos necessários serão criados no projeto. Para importar o componente basta utilizar seu seletor em um HTML de outro componente  

Para criar um componente utilize o comando: 

```bash
ng generate <nome-do-componente>

ou

ng generate component components/primeiro-componente
```

Melhores praticas: para evitar que o componente seja criado dentro do app de forma desorganizada podemos passar um diretório que será criado pelo angular. 

Podemos observar que um componente foi atualizado, esse é o componente principal da aplicação o componente criado precisa ser importado nessa pagina, o angular faz isso automaticamente. 

UPDATE src/app/app.module.ts podemos observar que o arquivo tem uma nova linha:  

import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';

### Utilizando o componente

Uma vez que o componente foi criado, temos o arquivo: primeiro-component-component.ts:

```jsx
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

o styleUrl nos diz a estilização para aquele componente. Precisamos do caminho dado pelo selector: app-primeiro-componente

```html
<h2>Meu primeiro componente, espero que seja azul</h2>
<p>P é de paragrafo</p>
```

Agora, toda vez que queremos importar esse componente para uma pagina, basta importar como uma TAG:

```html
<app-primeiro-componente><\app-primeiro-componente>
```

Para criar uma estilização para aquele componente, basta modificar o CSS do componente que você quer modificar. As configurações serão aplicadas apenas para o componente

 src/app/components/primeiro-componente/primeiro-componente.component.css

```css
h2 {color: blue;}
```

### Interpolação de dados

As “variáveis” em angular são criadas no arquivo .ts, dentro da classe. Portanto elas são propriedades de uma classe. Teremos então acesso a estes dados no arquivo .HTML o template. A impressão é feita através do {{ dado }} 

Então, dentro do aquivo .ts:  

```jsx
export class PrimeiroComponenteComponent implements OnInit {

  // AQUI SÃO CRIADOS OS ATRIBUTOS
  nome_da_variavel: string = 'Fabio';
  idade: number = 20;
  hobbies = ["Estudar","Trabalhar","Academia"];
  classeCarro = { nome: "fusca", ano: 2000 };

  constructor() { }
  ngOnInit(): void {
  }
}
```

Para utilizar o atributo, basta usar: {{ }}. OS ESPAÇOS ENTRE O atributo E AS CHAVES SÃO IMPORTANTES!!

```jsx
<h2> Minha variavel é: {{ nome_da_variavel }} </h2>
<h3> A idade é: {{ idade }}
<h3> hobbies, primeiro: {{ hobbies[0] }} segundo: {{ hobbies[1] }} terceiro: {{ hobbies[2] }}  </h3>
<h3> Classe: nome do carro:  {{ classeCarro.nome }} , ano do carro: {{ classeCarro.ano }}    </h3>
```

### CSS no ANGULAR

Pode ser feito de duas maneiras, Global e Scoped

GLOBAL ⇒ Arquivo styles.css, que fica no src, estilo da aplicação TODA!. 

SCOPED ⇒ Estilos em nível de componente, criamos quando damos o generante. 

Scoped: 

src/app/components/primeiro-componente/primeiro-componente.component.css

```jsx
h2 {color: blue;}

.title{
    background-color: black;
    color: blueviolet;
    padding: 15px;
}
```

src/app/components/primeiro-componente/primeiro-componente.component.ts

```jsx
<h3 class="title"> Esse tem estilo </h3>
```

Obs: Se não houve modificações verifique o arquivo global, styles.css como ele tem prioridade sobre todos os CSS provavelmente ele está impedindo que uma modificação de escopo seja aplicada.

### Compartilhando dados

Podemos compartilhar dados do componente pai com o componente filho. Utilizando na chamada do componente o nome do dado que será recebido: [dado] . No componente filho utilizamos o decorator @input , que tem como papel entregar o dado para o tamplate. 

ng generate component components/parent-data

<app-parent-data></app-parent-data>

input é um modulo e precisa ser importado, observe o import 

Primeiro, criamos o:

src/app/components/primeiro-componente/primeiro-componente.component.ts

```jsx
userName = 'Jaoquim';
DataUser = {cargo:"chefão", acesso:"Privilegiado"};
```

src/app/components/primeiro-componente/primeiro-componente.component.html

[Name] = Vou chamar ele lá

“userName” = estou chamando aqui no componente pai. 

```jsx
<app-parent-data [Name] = "userName" [DataUser]="DataUser" ></app-parent-data>
```

src/app/components/parent-data/parent-data.component.html

```jsx
<p>parent-data works!</p>
<h1>meu user name is: {{ Name }}</h1>
<h2>Meu cargo is {{ DataUser.cargo }}</h2>
<h2>Meu acesso is {{ DataUser.acesso }}</h2>
```

src/app/components/parent-data/parent-data.component.ts 

```jsx
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
```

Name precisa ser inicializado, nessa caso é uma string vazia. Não importa ele será sobrescrito. 

DataUser é um objeto, o ! tipa o DataUser tirando a necessidade de inicializar. 

### Diretivas:

As diretivas operam sobre os elementos, são como diversas funções. Por exemplo, podemos utilizar uma diretiva para aplicar estilos a um elemento. Elas são caracterizadas pelo ng:  ngAlgumaCoisa.

```bash
ng generate component components/diretivas
```

src/app/components/diretivas/diretivas.component.html

```bash
<p>diretivas works! estáticas:</p>
<h2 [ngStyle]=" { 'font-size': '50px' } ">
		Testando diretiva de estilos estaticos </h2>

<p>diretivas works! Dinamicas:</p>
<h2 [ngStyle]="{ 'font-size': size  + 'px', 
                  'font-family': font , 
                  'color': color } ">
                  Testando diretiva de estilos dinamicos </h2>
```

src/app/components/diretivas/diretivas.component.ts

```bash
export class DiretivasComponent implements OnInit {

  size = 40;
  font = 'Arial';
  color = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
```

No primeiro exemplo, podemos modificar o estilo do componente de forma inline, utilizando o comando [ngStyle] . No segundo exemplo podemos passar os atributos das modificações como se fossem parâmetros, se quiséssemos modificar todo o componente, bastaria modificar os paramentos no component.ts . 

### Renderização condicional

No angular podemos utilizar o comando ngIf para criar condicionais. Os valores podem ser dinâmicos (propriedades) ou outras comparações. O comando else pode ser utilizado. 

ng generate component components/if-render

```bash
export class IfRenderComponent implements OnInit {

  canShow: boolean = true;
  nome: string = "Fabio1";

  constructor() { }

  ngOnInit(): void {
  }
}
```

Para criar o condicional IF e else: 

src/app/components/if-render/if-render.component.html

```bash
<div class="class">
    <div *ngIf="canShow">Estamos mostrando isso porque foi permitido</div>
    <h2  *ngIf="nome === 'Fabio'">Somente é exibido se o nome dele for Fabio</h2>
    <h3  *ngIf="nome === 'Fabio' ; else nameNotFoud">Somente é exibido se o nome dele for Fabio</h3>

    <ng-template #nameNotFoud>
        <h3>O NOME NÃO FOI ENCONTRADO</h3>
    </ng-template>
    
</div>
```

### Eventos

Podemos ativar eventos nos componentes para disparar algum método. Um exemplo comum é o click. a sintaxe é na forma : (evento)=”Alguma_Função”, (click)=”Alguma_função”. Os métodos ficam na classe

```bash
<div class="class">
    <h1 *ngIf="show"> Agora o fabinho sabe trabalhar com eventos!! </h1>
    <button (click)="ShowMessage()">Click em mim</button>
</div>
```

O *ngIf=”show” recebe como parâmetro a variável show que foi definida dentro do EventosComponent do componente eventos. Um true faz o H1 ser exibido e um false faz ele ser omitido.  O click é um evento do HTML o “showmessage()” é um método que foi definido no .ts ele altera o status da variável show. então (toda vez que o evento click acontece) = “chame_esse_metodo”. 

```bash
export class EventosComponent implements OnInit {
  show: boolean = false;
  constructor() { }
  ngOnInit(): void { } 
  ShowMessage(): void { this.show = !this.show; }
}
```

o ! antes em !this.show serve para fazer um tougue do status da variável. 

### Emitindo eventos

Podemos comunicar eventos entre componentes Filho para Pai, utilizamos o @output, que vai fazer a saída do evento do componente filho. Na tag de invocação do componente no template, escolhermos um método para executar quando o evento foi emitido. Exemplo: (emit)=”onEmit()”.

  ng generate component components/emiter

  ng generate component components/change-number

O Emiter é o Pai, o change numero é o filho. dado que um evento ocorreu no filho eu quero que uma ação seja executada no Pai. Não se esqueça de importar os modulos necessarios, o output e o event no componente filho. 

Change numero:

```bash
<h1>change-number works!</h1>
<button (click)="handleClick()">Aumente o numero</button>
```

```bash
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
```

Emiter:

```bash
<div class="class">
    <h1>O numero é: {{ myNumber }} </h1>
    <app-change-number (changeNumber)="OnchangeNumber()"></app-change-number>
    <!-- O evento criado lá no filho (changeNumber) vai chamar um metodo OnchangeNumber aqui do pai. -->
</div>
```

```bash
export class EmiterComponent implements OnInit {
  myNumber: number = 0;
  

  constructor() { }

  ngOnInit(): void { }

  OnchangeNumber() {
    this.myNumber = this.myNumber+1
    console.log("Deu certo, dentro do OnchangeNumber")
  }

}
```

### Renderização de listas (For)

Ou loop em listas, é uma propriedade com os itens da lista. No template do componente vamos usar o *ngFor, a sintaxe é *ngFor=”let item of items” 

 

```bash
export class ListRenderComponent implements OnInit {

  animals = [ 
    {name: "toto", type:"dog"},
    {name: "xanim", type:"cat"},
    {name: "girafa", type:"elephant"},
    {name: "chico", type:"chiken"},
    {name: "nina", type:"dog"} ];

  constructor() { }
  ngOnInit(): void {
  }
}
```

*ngFor="let animal of animals" Funciona como o For simples em python. let VARIAVEL of LISTA, para acessar as propriedades basta: VARIAVEL.Propriedade. 

```bash
<div class="class">
<p>list-render works!</p>
    <h2>Animais:</h2>
    <!-- ul -> lista em HTML -->
        <ul>
            <li *ngFor="let animal of animals"> 
                Nome: {{ animal.name }} ,
                type: {{ animal.type }} </li>
        </ul>
</div>
```

### Interfaces (typeScript)

Toda entidade precisa de uma interface, o que facilita a manutenção. Vamos utilizar o código anterior.

Dentro de app → new file → Animal.ts

```bash
export interface Animal {
    name: string;
    type: string;
    age: number;
}
```

Observe a importação que precisa do objeto Animal, e a tipagem da lista animals que agora é um objeto do Animal.

```bash
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
```

```bash
<div class="class">
<p>list-render works!</p>
    <h2>Animais:</h2>
    <!-- ul -> lista em HTML -->
        <ul>
            <li *ngFor="let animal of animals"> 
                Nome: {{ animal.name }} ,
                type: {{ animal.type }} 
            <button (click)="ShowAge(animal)" >Mostre a Idade</button>
            </li>
        </ul>
        <h3>{{ animaldetails }}</h3>
</div>
```

### Pipe Operators (14)

### Rotas:

[Loiane, melhor professora de Angular](https://youtu.be/tHK-k7GxAAE) 

Crie seu componente que vai funcionar como pagina para aquela rota: 

```bash
ng g c nome-componente
```

crie em APP um arquivo de nome: app.routing.ts

Os paths precisam de componentes que já foram criados 

```bash
import { ModuleWithProviders } from "@angular/core";

import { Route, RouterModule, Routes } from "@angular/router";

import { DeskEsqueciSenhaComponent } from "./desk-esqueci-senha/desk-esqueci-senha.component";
import { DeskLoginComponent } from "./desk-login/desk-login.component";
import { DeskNovaSenhaComponent } from "./desk-nova-senha/desk-nova-senha.component";

const APP_ROUTES: Routes = [
    { path: '', component: DeskLoginComponent },
    { path: 'esquecisenha', component: DeskEsqueciSenhaComponent },
    { path: 'navasenha', component: DeskNovaSenhaComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
```

Em app.module.ts Não se esqueça de das imports a constante 

```bash
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DeskLoginComponent,
    DeskPreCadastroComponent,
    DeskEsqueciSenhaComponent,
    DeskNovaSenhaComponent
  ],
  imports: [
    BrowserModule,
    ParacasaLibModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Por ultimo, coloque no app.modules.html

Para utilizar o RouterLink basta fazer como no código abaixo

```bash
<router-outlet></router-outlet>
<a routerLink="/esquecisenha">Podia ser um link</a>
```

[Para casa componentes](https://www.notion.so/Para-casa-componentes-657ca78e438d42e2a58c89f1168062f6)

[Rotas](https://www.notion.so/Rotas-506a955e1c324d09928f85f49e8b940d)

[Loiane](https://www.notion.so/Loiane-5ea16e30efc5457e8e142d3ed8a27eed)
