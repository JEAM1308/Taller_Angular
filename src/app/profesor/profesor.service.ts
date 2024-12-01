import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Profesor } from './profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private apiUrl: string = environment.baseUrl + 'profesores';

  constructor(private http: HttpClient) { }

  getProfesor(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(this.apiUrl + "/" + id);
  }

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.apiUrl);
  }
} 