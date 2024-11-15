import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1BedeutungComponent } from './module1-bedeutung.component';

describe('Module1BedeutungComponent', () => {
  let component: Module1BedeutungComponent;
  let fixture: ComponentFixture<Module1BedeutungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module1BedeutungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1BedeutungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
