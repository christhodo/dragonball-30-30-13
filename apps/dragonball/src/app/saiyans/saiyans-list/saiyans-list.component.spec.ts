import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyansListComponent } from './saiyans-list.component';

describe('SaiyansListComponent', () => {
  let component: SaiyansListComponent;
  let fixture: ComponentFixture<SaiyansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaiyansListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaiyansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
