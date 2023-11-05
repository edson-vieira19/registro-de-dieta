import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioAlimentarComponent } from './diario-alimentar.component';

describe('DiarioAlimentarComponent', () => {
  let component: DiarioAlimentarComponent;
  let fixture: ComponentFixture<DiarioAlimentarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiarioAlimentarComponent]
    });
    fixture = TestBed.createComponent(DiarioAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
