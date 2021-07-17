import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasPageListaComponent } from './lojas-page-lista.component';

describe('LojasPageListaComponent', () => {
  let component: LojasPageListaComponent;
  let fixture: ComponentFixture<LojasPageListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasPageListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasPageListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
