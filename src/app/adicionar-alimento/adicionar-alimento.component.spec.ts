import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAlimentoComponent } from './adicionar-alimento.component';

describe('AdicionarAlimentoComponent', () => {
  let component: AdicionarAlimentoComponent;
  let fixture: ComponentFixture<AdicionarAlimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarAlimentoComponent]
    });
    fixture = TestBed.createComponent(AdicionarAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
