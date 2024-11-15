import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4AnwendungsbeispieleComponent } from './module4-anwendungsbeispiele.component';

describe('Module4AnwendungsbeispieleComponent', () => {
  let component: Module4AnwendungsbeispieleComponent;
  let fixture: ComponentFixture<Module4AnwendungsbeispieleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module4AnwendungsbeispieleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module4AnwendungsbeispieleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
