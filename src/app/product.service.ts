import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Apprenant {
  id: number;
  nom: string;
  prenom: string;
  formation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  private apiUrl = 'http://localhost:3000/apprenants'; // URL de l'API

  constructor(private http: HttpClient) { }

  // Obtenir tous les apprenants
  getApprenants(): Observable<Apprenant[]> {
    return this.http.get<Apprenant[]>(this.apiUrl);
  }

  // Obtenir un apprenant par ID
  getApprenantById(id: number): Observable<Apprenant> {
    return this.http.get<Apprenant>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un apprenant
  addApprenant(apprenant: Apprenant): Observable<Apprenant> {
    return this.http.post<Apprenant>(this.apiUrl, apprenant);
  }

  // Mettre à jour un apprenant
  updateApprenant(id: number, apprenant: Apprenant): Observable<Apprenant> {
    return this.http.put<Apprenant>(`${this.apiUrl}/${id}`, apprenant);
  }

  // Supprimer un apprenant
  deleteApprenant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
