import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagelunchComponent } from './packagelunch.component';

describe('PackagelunchComponent', () => {
  let component: PackagelunchComponent;
  let fixture: ComponentFixture<PackagelunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagelunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagelunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
