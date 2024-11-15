import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2WasComponent } from './module2-was.component';

describe('Module2WasComponent', () => {
  let component: Module2WasComponent;
  let fixture: ComponentFixture<Module2WasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module2WasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2WasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
