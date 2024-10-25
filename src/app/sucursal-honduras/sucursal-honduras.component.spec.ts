import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalHondurasComponent } from './sucursal-honduras.component';

describe('SucursalHondurasComponent', () => {
  let component: SucursalHondurasComponent;
  let fixture: ComponentFixture<SucursalHondurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalHondurasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalHondurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
