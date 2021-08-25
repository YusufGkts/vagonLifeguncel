import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTicketRefundedComponent } from './graph-ticket-refunded.component';

describe('GraphTicketRefundedComponent', () => {
  let component: GraphTicketRefundedComponent;
  let fixture: ComponentFixture<GraphTicketRefundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphTicketRefundedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTicketRefundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
