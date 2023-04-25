import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerlistComponent } from './containerlist.component';

describe('ContainerlistComponent', () => {
  let component: ContainerlistComponent;
  let fixture: ComponentFixture<ContainerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
