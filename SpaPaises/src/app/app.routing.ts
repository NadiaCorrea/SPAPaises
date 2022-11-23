// app.routing.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // importamos las rutas de angular

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//variable que guardará la lista de todas las rutas de la web
const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
