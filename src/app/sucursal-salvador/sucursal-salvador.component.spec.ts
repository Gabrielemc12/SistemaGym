import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalSalvadorComponent } from './sucursal-salvador.component';

describe('SucursalSalvadorComponent', () => {
  let component: SucursalSalvadorComponent;
  let fixture: ComponentFixture<SucursalSalvadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalSalvadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalSalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
