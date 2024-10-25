import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGarantiaComponent } from './control-garantia.component';

describe('ControlGarantiaComponent', () => {
  let component: ControlGarantiaComponent;
  let fixture: ComponentFixture<ControlGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlGarantiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
