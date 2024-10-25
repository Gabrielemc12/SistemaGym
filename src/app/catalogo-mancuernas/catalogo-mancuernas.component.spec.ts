import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoMancuernasComponent } from './catalogo-mancuernas.component';

describe('CatalogoMancuernasComponent', () => {
  let component: CatalogoMancuernasComponent;
  let fixture: ComponentFixture<CatalogoMancuernasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoMancuernasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoMancuernasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
