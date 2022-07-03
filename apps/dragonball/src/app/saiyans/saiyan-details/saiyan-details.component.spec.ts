import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanDetailsComponent } from './saiyan-details.component';

describe('SaiyanDetailsComponent', () => {
  let component: SaiyanDetailsComponent;
  let fixture: ComponentFixture<SaiyanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaiyanDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaiyanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
