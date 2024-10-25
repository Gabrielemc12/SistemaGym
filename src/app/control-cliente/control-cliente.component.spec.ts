import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlClienteComponent } from './control-cliente.component';

describe('ControlClienteComponent', () => {
  let component: ControlClienteComponent;
  let fixture: ComponentFixture<ControlClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
