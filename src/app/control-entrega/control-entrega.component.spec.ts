import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEntregaComponent } from './control-entrega.component';

describe('ControlEntregaComponent', () => {
  let component: ControlEntregaComponent;
  let fixture: ComponentFixture<ControlEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
