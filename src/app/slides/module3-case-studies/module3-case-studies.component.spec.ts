import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3CaseStudiesComponent } from './module3-case-studies.component';

describe('Module3CaseStudiesComponent', () => {
  let component: Module3CaseStudiesComponent;
  let fixture: ComponentFixture<Module3CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module3CaseStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module3CaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
