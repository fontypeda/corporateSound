import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1PsychologieComponent } from './module1-psychologie.component';

describe('Module1PsychologieComponent', () => {
  let component: Module1PsychologieComponent;
  let fixture: ComponentFixture<Module1PsychologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module1PsychologieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1PsychologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
