import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPersonajeComponent } from './crear-personaje-component';

describe('CrearPersonajeComponent', () => {
  let component: CrearPersonajeComponent;
  let fixture: ComponentFixture<CrearPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPersonajeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPersonajeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
