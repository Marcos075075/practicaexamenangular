import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Series } from '../../models/series';
import { ServiceSeries } from '../../services/service.series';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-serie-component',
  standalone: false,
  styleUrl: './serie-component.css',
  templateUrl: './serie-component.html',
})
export class SerieComponent implements OnInit{
  public serie!: Series;

  constructor(
    private _serviceSeries: ServiceSeries,
    private _cdr: ChangeDetectorRef,
    private _activeRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this._activeRoute.params.subscribe(async(params: Params) => {
      let idSerie = params['idSerie'];
      this.serie = await this._serviceSeries.getSerie(idSerie);
      this._cdr.detectChanges();
    })
  }
}
