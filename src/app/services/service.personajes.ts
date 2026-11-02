import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Personajes } from "../models/personajes";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServicePersonajes {
    constructor(private _http: HttpClient) {}
    url = environment.urlApiSeries;

    async getAllPersonajes(): Promise<Personajes[]> {
        let request="api/Personajes";
        return firstValueFrom(this._http.get<Personajes[]>(this.url + request));
    }

    async getPersonajes(idSerie: number): Promise<Personajes[]> {
        let request="api/Series/PersonajesSerie/" + idSerie;
        return firstValueFrom(this._http.get<Personajes[]>(this.url + request));
    }

    async getPersonaje(idPersonaje: number): Promise<Personajes> {
        let request="api/Personajes/" + idPersonaje;
        return firstValueFrom(this._http.get<Personajes>(this.url + request));
    }

    async crearPersonaje (personaje: Personajes): Promise<any> {
        let json = JSON.stringify(personaje);
        let header = new HttpHeaders().set("Content-Type", "application/json");
        let request = "/api/Personajes";
        return firstValueFrom(this._http.post(this.url + request, json, { headers: header }));
    }

    async modificarPersonaje ( idPersonaje: number, idSerie: number): Promise<any> {
        let request = "/api/Personajes/" + idPersonaje + "/" + idSerie;
        return firstValueFrom(this._http.put(this.url + request, null));
    }
}