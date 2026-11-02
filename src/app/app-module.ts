import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceSeries } from './services/service.series';
import { ServicePersonajes } from './services/service.personajes';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { CrearPersonajeComponent } from './components/crear-personaje-component/crear-personaje-component';
import { ModificarPersonajeComponent } from './components/modificar-personaje-component/modificar-personaje-component';
import { MostrarPersonajeSerieComponent } from './components/mostrar-personaje-serie-component/mostrar-personaje-serie-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    SerieComponent,
    PersonajesComponent,
    CrearPersonajeComponent,
    ModificarPersonajeComponent,
    MostrarPersonajeSerieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceSeries,
    ServicePersonajes,
  ],
  bootstrap: [App],
})
export class AppModule {}
