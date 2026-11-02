import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePersonajes } from '../../services/service.personajes';
import { ServiceSeries } from '../../services/service.series';
import { Router } from '@angular/router';
import { Series } from '../../models/series';
import { Personajes } from '../../models/personajes';

@Component({
  selector: 'app-modificar-personaje-component',
  standalone: false,
  styleUrl: './modificar-personaje-component.css',
  templateUrl: './modificar-personaje-component.html',
})
export class ModificarPersonajeComponent implements OnInit{
  public series!: Series[];
  public personajes!: Personajes[];
  public selectedPersonaje!: number;
  public selectedSerie!: number;
  @ViewChild('cajapersonaje') cajaPersonaje!: ElementRef;
  @ViewChild('cajaserie') cajaSerie!: ElementRef;

  constructor(
    private _servicePersonajes: ServicePersonajes,
    private _serviceSeries: ServiceSeries,
    private _cdr: ChangeDetectorRef,
    private _ruter: Router
  ) {}

  async modificarPersonaje(): Promise<void> {
    let idPersonaje = parseInt(this.cajaPersonaje.nativeElement.value);
    let idSerie = parseInt(this.cajaSerie.nativeElement.value);
    
    await this._servicePersonajes.modificarPersonaje(idPersonaje, idSerie);
    this._ruter.navigate(['/personajes', idSerie]);
  }

   mostrar(): void {
    this.selectedPersonaje = parseInt(this.cajaPersonaje.nativeElement.value);
    this.selectedSerie = parseInt(this.cajaSerie.nativeElement.value);
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
      this.series = await this._serviceSeries.getSeries();
      this.personajes = await this._servicePersonajes.getAllPersonajes();
      this._cdr.detectChanges();
  }
}
