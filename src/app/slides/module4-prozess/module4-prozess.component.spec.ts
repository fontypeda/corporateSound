import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4ProzessComponent } from './module4-prozess.component';

describe('Module4ProzessComponent', () => {
  let component: Module4ProzessComponent;
  let fixture: ComponentFixture<Module4ProzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module4ProzessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module4ProzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
