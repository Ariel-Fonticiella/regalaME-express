import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftedDetailsComponent } from './gifted-details.component';

describe('GiftedDetailsComponent', () => {
  let component: GiftedDetailsComponent;
  let fixture: ComponentFixture<GiftedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
