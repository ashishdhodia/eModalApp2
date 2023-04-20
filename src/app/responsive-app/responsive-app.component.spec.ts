import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveAppComponent } from './responsive-app.component';

describe('ResponsiveAppComponent', () => {
  let component: ResponsiveAppComponent;
  let fixture: ComponentFixture<ResponsiveAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
