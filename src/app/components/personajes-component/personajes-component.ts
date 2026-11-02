import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Personajes } from '../../models/personajes';
import { ServicePersonajes } from '../../services/service.personajes';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-personajes-component',
  standalone: false,
  styleUrl: './personajes-component.css',
  templateUrl: './personajes-component.html',
})
export class PersonajesComponent implements OnInit{
  public personajes!: Personajes[];

  constructor(
    private _servicePersonajes: ServicePersonajes,
    private _cdr: ChangeDetectorRef,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe(async (params: Params) => {
      let idSerie = params['idSerie'];
      this.personajes = await this._servicePersonajes.getPersonajes(idSerie);
      this._cdr.detectChanges();
    });
  }
}
