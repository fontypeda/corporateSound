import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZusaetzlicheThemenComponent } from './zusaetzliche-themen.component';

describe('ZusaetzlicheThemenComponent', () => {
  let component: ZusaetzlicheThemenComponent;
  let fixture: ComponentFixture<ZusaetzlicheThemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZusaetzlicheThemenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZusaetzlicheThemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
