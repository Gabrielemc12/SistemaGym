import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEnvioComponent } from './control-envio.component';

describe('ControlEnvioComponent', () => {
  let component: ControlEnvioComponent;
  let fixture: ComponentFixture<ControlEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlEnvioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
