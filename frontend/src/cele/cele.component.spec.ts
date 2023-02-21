import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleComponent } from './cele.component';

describe('CeleComponent', () => {
  let component: CeleComponent;
  let fixture: ComponentFixture<CeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
