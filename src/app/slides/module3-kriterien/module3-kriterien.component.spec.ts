import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3KriterienComponent } from './module3-kriterien.component';

describe('Module3KriterienComponent', () => {
  let component: Module3KriterienComponent;
  let fixture: ComponentFixture<Module3KriterienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module3KriterienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module3KriterienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
