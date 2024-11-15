import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1ZusammenfassungComponent } from './module1-zusammenfassung.component';

describe('Module1ZusammenfassungComponent', () => {
  let component: Module1ZusammenfassungComponent;
  let fixture: ComponentFixture<Module1ZusammenfassungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module1ZusammenfassungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1ZusammenfassungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
