import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4RechteComponent } from './module4-rechte.component';

describe('Module4RechteComponent', () => {
  let component: Module4RechteComponent;
  let fixture: ComponentFixture<Module4RechteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module4RechteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Module4RechteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
