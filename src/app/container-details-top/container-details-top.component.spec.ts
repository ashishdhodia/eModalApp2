import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDetailsTopComponent } from './container-details-top.component';

describe('ContainerDetailsTopComponent', () => {
  let component: ContainerDetailsTopComponent;
  let fixture: ComponentFixture<ContainerDetailsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDetailsTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerDetailsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
