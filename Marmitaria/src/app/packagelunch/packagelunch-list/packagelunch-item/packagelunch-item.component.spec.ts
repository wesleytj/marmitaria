import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagelunchItemComponent } from './packagelunch-item.component';

describe('PackagelunchItemComponent', () => {
  let component: PackagelunchItemComponent;
  let fixture: ComponentFixture<PackagelunchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagelunchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagelunchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
