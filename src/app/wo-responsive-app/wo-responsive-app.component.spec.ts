import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoResponsiveAppComponent } from './wo-responsive-app.component';

describe('WoResponsiveAppComponent', () => {
  let component: WoResponsiveAppComponent;
  let fixture: ComponentFixture<WoResponsiveAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoResponsiveAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoResponsiveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
