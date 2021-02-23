import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component"
import {HomeRoutingModule} from "./home-routing.module";
import { DetailFormComponent } from './detail-form/detail-form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    HomeComponent,
    DetailFormComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]

})
export class HomeModule {

}
