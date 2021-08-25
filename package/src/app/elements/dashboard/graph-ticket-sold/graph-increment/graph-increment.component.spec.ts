import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphIncrementComponent } from './graph-increment.component';

describe('GraphIncrementComponent', () => {
  let component: GraphIncrementComponent;
  let fixture: ComponentFixture<GraphIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphIncrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
