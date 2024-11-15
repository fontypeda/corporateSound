import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3TouchpointsComponent } from './module3-touchpoints.component';

describe('Module3TouchpointsComponent', () => {
  let component: Module3TouchpointsComponent;
  let fixture: ComponentFixture<Module3TouchpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module3TouchpointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module3TouchpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
