import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBeersComponent } from './country-beers.component';

describe('CountryBeersComponent', () => {
  let component: CountryBeersComponent;
  let fixture: ComponentFixture<CountryBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryBeersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
