import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profesor } from '../profesor';
import { dataProfesores } from '../dataProfesor';
import { ProfesorDetailComponent } from '../profesor-detail/profesor-detail.component';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css'],
  imports: [CommonModule, ProfesorDetailComponent],
  standalone: true
})
export class ProfesorListComponent implements OnInit {
  selectedProfesor!: Profesor;
  selected: Boolean = false;
  profesores: Array<Profesor> = [];

  constructor() { }

  onSelected(profesor: Profesor): void {
    this.selected = true;
    this.selectedProfesor = profesor;
  }

  ngOnInit() {
    this.profesores = dataProfesores;
  }
} 