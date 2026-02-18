import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PiloteService } from '../../../core/services/pilote.service';
import { of, switchMap, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IPilote } from '../../../shared/models/interfaces/i-pilote';
import { EcurieService } from '../../../core/services/ecurie.service';
import { IEcurie } from '../../../shared/models/interfaces/i-ecurie';

@Component({
  selector: 'app-details',
  imports: [AsyncPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _piloteService = inject(PiloteService);
  
  pilote$ = of<IPilote[]>([]);
  ecurie = this._activatedRoute.snapshot.params['id'];
  
  
  ngOnInit(): void {
    this.pilote$ = this._activatedRoute.params.pipe(
      switchMap(params => this._piloteService.getPilotesByTeamId(params['id'])));
    }

  goBack() {
    this._router.navigate(['formule']);
  }
}
