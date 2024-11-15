import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4BranchenueberblickComponent } from './module4-branchenueberblick.component';

describe('Module4BranchenueberblickComponent', () => {
  let component: Module4BranchenueberblickComponent;
  let fixture: ComponentFixture<Module4BranchenueberblickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module4BranchenueberblickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module4BranchenueberblickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
