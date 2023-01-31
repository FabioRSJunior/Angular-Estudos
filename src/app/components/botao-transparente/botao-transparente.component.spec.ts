import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTransparenteComponent } from './botao-transparente.component';

describe('BotaoTransparenteComponent', () => {
  let component: BotaoTransparenteComponent;
  let fixture: ComponentFixture<BotaoTransparenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoTransparenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoTransparenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
