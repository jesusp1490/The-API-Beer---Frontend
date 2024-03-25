import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Asegúrate de importar AppComponent si lo necesitas

const routes: Routes = [
  // Define tus rutas aquí
  // Ejemplo:
  // { path: '', component: AppComponent },
  // { path: 'other', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
