import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1IntroComponent } from './module1-intro.component';

describe('Module1IntroComponent', () => {
  let component: Module1IntroComponent;
  let fixture: ComponentFixture<Module1IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module1IntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
