import { TestBed, async } from '@angular/core/testing';
import { RoueComponent } from './roue.component';
import {ServiceService} from '../service/service.service';

describe('roueComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoueComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RoueComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-wheel'`, () => {
    const fixture = TestBed.createComponent(RoueComponent);
    const app = fixture.componentInstance;
    expect(app).toEqual('angular-wheel'); 
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RoueComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-wheel app is running!');
  });
});
