import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWebComponent } from './carousel-web.component';

describe('CarouselWebComponent', () => {
  let component: CarouselWebComponent;
  let fixture: ComponentFixture<CarouselWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
