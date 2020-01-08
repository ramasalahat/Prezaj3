import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopempComponent } from './topemp.component';

describe('TopempComponent', () => {
  let component: TopempComponent;
  let fixture: ComponentFixture<TopempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
