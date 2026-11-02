import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Series } from "../models/series";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceSeries {
    constructor(private _http: HttpClient) {}
    url = environment.urlApiSeries;

    async getSeries(): Promise<Series[]> {
        let request= "/api/Series";
        return firstValueFrom(this._http.get<Series[]>(this.url + request));        
    }

    async getSerie(idSerie: number): Promise<Series> {
        let request= "/api/Series/" + idSerie;
        return firstValueFrom(this._http.get<Series>(this.url + request));
    }

}