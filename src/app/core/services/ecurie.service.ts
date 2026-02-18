import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPilote } from '../../shared/models/interfaces/i-pilote';
import { IEcurie } from '../../shared/models/interfaces/i-ecurie';

@Injectable({
  providedIn: 'root',
})
export class EcurieService {
  // url base de l'api
  private readonly baseUrl = 'http://localhost:3000/constructeurs';
  // client http pour faire les requêtes
  private readonly httpClient: HttpClient = inject(HttpClient);

  /**
   * 
   * @returns Un observable d'un tableau d'écurie
   */
  getAllTeams(): Observable<IEcurie[]> {
    return this.httpClient.get<IEcurie[]>(this.baseUrl);
  }

  getTeamById(id: string): Observable<IEcurie> {
    return this.httpClient.get<IEcurie>(`${this.baseUrl}/${id}`);
  }

  getPilotesByTeamId(id: string): Observable<IPilote[]> {
    return this.httpClient.get<IPilote[]>(`${this.baseUrl}/${id}/pilotes`);
  }
}
