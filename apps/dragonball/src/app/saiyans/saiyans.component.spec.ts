import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyansComponent } from './saiyans.component';

describe('SaiyansComponent', () => {
  let component: SaiyansComponent;
  let fixture: ComponentFixture<SaiyansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaiyansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaiyansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
