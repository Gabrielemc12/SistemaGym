import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalGuatemalaComponent } from './sucursal-guatemala.component';

describe('SucursalGuatemalaComponent', () => {
  let component: SucursalGuatemalaComponent;
  let fixture: ComponentFixture<SucursalGuatemalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalGuatemalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalGuatemalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
