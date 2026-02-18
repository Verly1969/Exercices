import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPilote } from '../../shared/models/interfaces/i-pilote';

@Injectable({
  providedIn: 'root',
})
export class PiloteService {
  
  // url base de l'api
  private readonly baseUrl = 'http://localhost:3000/pilotes';
  // client http pour faire les requêtes
  private readonly httpClient: HttpClient = inject(HttpClient);

  // méthode pour récupérer tous les pilotes
  getAllPilotes(): Observable<IPilote[]> {
    return this.httpClient.get<IPilote[]>(this.baseUrl);
  }
}
