import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Saiyan, emptySaiyan } from '@dragonball/api-interfaces';
import { SaiyanFacade } from '@dragonball/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'dragonball-saiyans',
  templateUrl: './saiyans.component.html',
  styleUrls: ['./saiyans.component.scss'],
})
export class SaiyansComponent implements OnInit {
  allSaiyans$: Observable<Saiyan[]> = this.saiyanFacade.allSaiyans$;
  selectedSaiyan$: Observable<Saiyan> = this.saiyanFacade.selectedSaiyans$;

  form: FormGroup;

  constructor(
    private saiyanFacade: SaiyanFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.saiyanFacade.mutations$.subscribe((_) => this.resetSaiyan());
  }

  ngOnInit() {
    this.initForm();
    this.saiyanFacade.loadSaiyans();
    this.resetSaiyan();

    const saiyanRouteId = this.route.snapshot.params['id'];

    if (saiyanRouteId) {
      this.loadSaiyan(saiyanRouteId);
    }
  }

  viewSaiyan(saiyanId: string) {
    this.router.navigate(['saiyans', saiyanId]);
  }

  loadSaiyan(saiyanId: string) {
    this.saiyanFacade.selectSaiyan(saiyanId);
    this.saiyanFacade.loadSaiyan(saiyanId);
  }

  selectSaiyan(saiyan: Saiyan) {
    this.saiyanFacade.selectSaiyan(saiyan.id);
    this.form.patchValue(saiyan);
  }

  saveSaiyan(saiyan: Saiyan) {
    this.saiyanFacade.saveSaiyan(saiyan);
  }

  deleteSaiyan(saiyan: Saiyan) {
    this.saiyanFacade.deleteSaiyan(saiyan);
  }

  resetSaiyan() {
    this.form.reset();
    this.selectSaiyan(emptySaiyan);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      haircolor: [''],
    });
  }
}
