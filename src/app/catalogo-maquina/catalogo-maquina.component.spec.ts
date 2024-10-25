import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoMaquinaComponent } from './catalogo-maquina.component';

describe('CatalogoMaquinaComponent', () => {
  let component: CatalogoMaquinaComponent;
  let fixture: ComponentFixture<CatalogoMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
