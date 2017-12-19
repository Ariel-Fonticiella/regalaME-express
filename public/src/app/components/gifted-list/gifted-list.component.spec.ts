import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftedListComponent } from './gifted-list.component';

describe('GiftedListComponent', () => {
  let component: GiftedListComponent;
  let fixture: ComponentFixture<GiftedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
