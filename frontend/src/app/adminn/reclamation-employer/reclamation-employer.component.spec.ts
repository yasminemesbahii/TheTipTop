import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationEmployerComponent } from './reclamation-employer.component';

describe('ReclamationEmployerComponent', () => {
  let component: ReclamationEmployerComponent;
  let fixture: ComponentFixture<ReclamationEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
