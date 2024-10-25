import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoProteccionComponent } from './catalogo-proteccion.component';

describe('CatalogoProteccionComponent', () => {
  let component: CatalogoProteccionComponent;
  let fixture: ComponentFixture<CatalogoProteccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoProteccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoProteccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
