import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Personajes } from '../../models/personajes';
import { Series } from '../../models/series';
import { ServicePersonajes } from '../../services/service.personajes';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-mostrar-personaje-serie-component',
  standalone: false,
  styleUrl: './mostrar-personaje-serie-component.css',
  templateUrl: './mostrar-personaje-serie-component.html',
})
export class MostrarPersonajeSerieComponent implements OnChanges {
  @Input() personaje!: number;
  @Input() serie!: number;
  public personajeSerie!: Personajes;
  public seriePersonaje!: Series;


  constructor(
    private _personajesService: ServicePersonajes,
    private _seriesService: ServiceSeries,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    // Comprobamos que ambos inputs tengan un valor asignado
    if (this.personaje && this.serie) {
      await this.cargarDatos();
    }
  }

  async cargarDatos(): Promise<void> {
    this.personajeSerie = await this._personajesService.getPersonaje(this.personaje);
    this.seriePersonaje = await this._seriesService.getSerie(this.serie);
    this._cdr.detectChanges();
  }
}
