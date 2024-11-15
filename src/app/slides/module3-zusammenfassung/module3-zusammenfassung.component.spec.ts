import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3ZusammenfassungComponent } from './module3-zusammenfassung.component';

describe('Module3ZusammenfassungComponent', () => {
  let component: Module3ZusammenfassungComponent;
  let fixture: ComponentFixture<Module3ZusammenfassungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module3ZusammenfassungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module3ZusammenfassungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
