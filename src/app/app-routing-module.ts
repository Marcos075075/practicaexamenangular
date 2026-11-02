import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { CrearPersonajeComponent } from './components/crear-personaje-component/crear-personaje-component';
import { ModificarPersonajeComponent } from './components/modificar-personaje-component/modificar-personaje-component';
import { MostrarPersonajeSerieComponent } from './components/mostrar-personaje-serie-component/mostrar-personaje-serie-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"serie/:idSerie", component: SerieComponent},
  {path:"personajes/:idSerie", component: PersonajesComponent},
  {path:"crear", component: CrearPersonajeComponent},
  {path:"modificar", component: ModificarPersonajeComponent},
  // {path:"personajeserie/:idSerie/:idPersonaje", component: MostrarPersonajeSerieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
