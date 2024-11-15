import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2ElementeComponent } from './module2-elemente.component';

describe('Module2ElementeComponent', () => {
  let component: Module2ElementeComponent;
  let fixture: ComponentFixture<Module2ElementeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module2ElementeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2ElementeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
