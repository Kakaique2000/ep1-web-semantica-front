import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPopupComponent } from './compra-popup.component';

describe('CompraPopupComponent', () => {
  let component: CompraPopupComponent;
  let fixture: ComponentFixture<CompraPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
