import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTicketSoldComponent } from './graph-ticket-sold.component';

describe('GraphTicketSoldComponent', () => {
  let component: GraphTicketSoldComponent;
  let fixture: ComponentFixture<GraphTicketSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphTicketSoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTicketSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
