import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaPopupComponent } from './loja-popup.component';

describe('LojaPopupComponent', () => {
  let component: LojaPopupComponent;
  let fixture: ComponentFixture<LojaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojaPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
