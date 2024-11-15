import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2ZusammenfassungComponent } from './module2-zusammenfassung.component';

describe('Module2ZusammenfassungComponent', () => {
  let component: Module2ZusammenfassungComponent;
  let fixture: ComponentFixture<Module2ZusammenfassungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module2ZusammenfassungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2ZusammenfassungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
