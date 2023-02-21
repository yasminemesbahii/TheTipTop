import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempolyerComponent } from './addempolyer.component';

describe('AddempolyerComponent', () => {
  let component: AddempolyerComponent;
  let fixture: ComponentFixture<AddempolyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddempolyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddempolyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
