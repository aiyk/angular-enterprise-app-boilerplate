import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailItemComponent } from './card-detail-item.component';

describe('CardDetailItemComponent', () => {
  let component: CardDetailItemComponent;
  let fixture: ComponentFixture<CardDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
