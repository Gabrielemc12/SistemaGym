import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDevolucionComponent } from './control-devolucion.component';

describe('ControlDevolucionComponent', () => {
  let component: ControlDevolucionComponent;
  let fixture: ComponentFixture<ControlDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlDevolucionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
