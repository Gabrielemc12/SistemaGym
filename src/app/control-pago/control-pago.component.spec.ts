import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPagoComponent } from './control-pago.component';

describe('ControlPagoComponent', () => {
  let component: ControlPagoComponent;
  let fixture: ComponentFixture<ControlPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
