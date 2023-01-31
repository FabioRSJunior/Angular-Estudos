import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { BotaoComponent } from './components/botao/botao.component';
import { BotaoTransparenteComponent } from './components/botao-transparente/botao-transparente.component';
import { InputComponent } from './components/input/input.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { InputLabelComponent } from './components/input-label/input-label.component';
import { InputDropdownComponent } from './components/components/input-dropdown/input-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    ParentDataComponent,
    DiretivasComponent,
    IfRenderComponent,
    EventosComponent,
    EmiterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    BotaoComponent,
    BotaoTransparenteComponent,
    InputComponent,
    TextboxComponent,
    InputLabelComponent,
    InputDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
