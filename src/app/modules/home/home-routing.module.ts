import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component"
import { NotFoundComponent } from 'src/app/not-found.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
const routes: Routes = [

    {
        path: '', component: HomeComponent,
        children: [{
            path: '', component: DetailFormComponent
        }]
    },

    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
