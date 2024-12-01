import { Component, Input, OnInit } from '@angular/core';
import { Profesor } from '../profesor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profesor-detail',
  templateUrl: './profesor-detail.component.html',
  styleUrls: ['./profesor-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProfesorDetailComponent implements OnInit {
  @Input() profesorDetail!: Profesor;
  
  constructor() { }

  ngOnInit() {
  }
} 