import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarPersonajeSerieComponent } from './mostrar-personaje-serie-component';

describe('MostrarPersonajeSerieComponent', () => {
  let component: MostrarPersonajeSerieComponent;
  let fixture: ComponentFixture<MostrarPersonajeSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarPersonajeSerieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarPersonajeSerieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
