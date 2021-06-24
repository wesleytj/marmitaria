import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagelunchListComponent } from './packagelunch-list.component';

describe('PackagelunchListComponent', () => {
  let component: PackagelunchListComponent;
  let fixture: ComponentFixture<PackagelunchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagelunchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagelunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
