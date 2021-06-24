import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagelunchDetailsComponent } from './packagelunch-details.component';

describe('PackagelunchDetailsComponent', () => {
  let component: PackagelunchDetailsComponent;
  let fixture: ComponentFixture<PackagelunchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagelunchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagelunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
