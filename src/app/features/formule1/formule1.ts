import { Component, inject, OnInit } from '@angular/core';
import { IPilote } from '../../shared/models/interfaces/i-pilote';
import { PiloteService } from '../../core/services/pilote.service';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { EcurieService } from '../../core/services/ecurie.service';
import { IEcurie } from '../../shared/models/interfaces/i-ecurie';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formule1',
  imports: [AsyncPipe],
  templateUrl: './formule1.html',
  styleUrl: './formule1.css',
})
export class Formule1 implements OnInit {
  
  private readonly _router = inject(Router);
  private readonly _piloteService = inject(PiloteService);
  private readonly _ecurieService = inject(EcurieService);
  pilotes$ = of<IPilote[]>([]);
  equipes$ = of<IEcurie[]>([]);
  
  ngOnInit(): void {
    this.pilotes$ = this._piloteService.getAllPilotes();
    this.equipes$ = this._ecurieService.getAllTeams();
  }

  details(id: string) {
    console.log(id);
    this._router.navigate(['formule', id, 'details']);
  }
}
