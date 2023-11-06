import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAlimentoComponent } from './alterar-alimento.component';

describe('AlterarAlimentoComponent', () => {
  let component: AlterarAlimentoComponent;
  let fixture: ComponentFixture<AlterarAlimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarAlimentoComponent]
    });
    fixture = TestBed.createComponent(AlterarAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
