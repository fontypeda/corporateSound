import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2UnterschiedComponent } from './module2-unterschied.component';

describe('Module2UnterschiedComponent', () => {
  let component: Module2UnterschiedComponent;
  let fixture: ComponentFixture<Module2UnterschiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module2UnterschiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2UnterschiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
