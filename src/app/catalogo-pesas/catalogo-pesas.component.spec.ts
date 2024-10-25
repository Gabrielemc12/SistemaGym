import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPesasComponent } from './catalogo-pesas.component';

describe('CatalogoPesasComponent', () => {
  let component: CatalogoPesasComponent;
  let fixture: ComponentFixture<CatalogoPesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoPesasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoPesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
