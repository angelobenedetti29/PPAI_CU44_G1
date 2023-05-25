import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEncuestaPageComponent } from './consultar-encuesta-page.component';

describe('ConsultarEncuestaPageComponent', () => {
  let component: ConsultarEncuestaPageComponent;
  let fixture: ComponentFixture<ConsultarEncuestaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEncuestaPageComponent]
    });
    fixture = TestBed.createComponent(ConsultarEncuestaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
