import { Component, inject, OnInit } from '@angular/core';
import { IPilote } from '../../shared/models/interfaces/i-pilote';
import { PiloteService } from '../../core/services/pilote.service';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-formule1',
  imports: [AsyncPipe],
  templateUrl: './formule1.html',
  styleUrl: './formule1.css',
})
export class Formule1 implements OnInit {
  
  private readonly _piloteService = inject(PiloteService);
  pilotes$ = of<IPilote[]>([]);

  ngOnInit(): void {
    this.pilotes$ = this._piloteService.getAllPilotes();
  }
}
