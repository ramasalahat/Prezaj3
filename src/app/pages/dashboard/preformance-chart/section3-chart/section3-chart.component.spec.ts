import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3ChartComponent } from './section3-chart.component';

describe('Section3ChartComponent', () => {
  let component: Section3ChartComponent;
  let fixture: ComponentFixture<Section3ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section3ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
