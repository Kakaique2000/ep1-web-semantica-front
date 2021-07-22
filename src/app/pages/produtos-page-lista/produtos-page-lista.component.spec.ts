import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPageListaComponent } from './produtos-page-lista.component';

describe('ProdutosPageListaComponent', () => {
  let component: ProdutosPageListaComponent;
  let fixture: ComponentFixture<ProdutosPageListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosPageListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosPageListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
