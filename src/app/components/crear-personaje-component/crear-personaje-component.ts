import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePersonajes } from '../../services/service.personajes';
import { Router } from '@angular/router';
import { Series } from '../../models/series';
import { ServiceSeries } from '../../services/service.series';
import { Personajes } from '../../models/personajes';

@Component({
  selector: 'app-crear-personaje-component',
  standalone: false,
  styleUrl: './crear-personaje-component.css',
  templateUrl: './crear-personaje-component.html',
})
export class CrearPersonajeComponent implements OnInit{
  public series!: Series[];
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajaserie') cajaSerie!: ElementRef;

  constructor(
    private _servicePersonajes: ServicePersonajes,
    private _serviceSeries: ServiceSeries,
    private _cdr: ChangeDetectorRef,
    private _ruter: Router
  ) {}

  async crearPersonaje(): Promise<void> {
    let nombre = this.cajaNombre.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let idSerie = parseInt(this.cajaSerie.nativeElement.value);
    
    //SI FUERA SELECT MULTIPLE:
    // const selectElement = this.cajaSerie.nativeElement as HTMLSelectElement;
    // let idsSeries: number[] = Array.from(selectElement.selectedOptions).map(
    //     (option) => parseInt(option.value)
    // );

    let personaje: Personajes = new Personajes(0, nombre, imagen, idSerie);
    await this._servicePersonajes.crearPersonaje(personaje);
    this._ruter.navigate(['/personajes', idSerie]);
  }

  async ngOnInit(): Promise<void> {
      this.series = await this._serviceSeries.getSeries();
      this._cdr.detectChanges();
  }
}
