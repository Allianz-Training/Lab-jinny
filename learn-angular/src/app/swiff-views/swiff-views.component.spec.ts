import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiffViewsComponent } from './swiff-views.component';

describe('SwiffViewsComponent', () => {
  let component: SwiffViewsComponent;
  let fixture: ComponentFixture<SwiffViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiffViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiffViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
