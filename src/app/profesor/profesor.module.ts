import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { ProfesorDetailComponent } from './profesor-detail/profesor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProfesorListComponent,
    ProfesorDetailComponent
  ],
  exports: [ProfesorListComponent],
  declarations: []
})
export class ProfesoresModule { } 