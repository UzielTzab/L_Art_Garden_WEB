import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithIconWebComponent } from './button-with-icon-web.component';

describe('ButtonWithIconWebComponent', () => {
  let component: ButtonWithIconWebComponent;
  let fixture: ComponentFixture<ButtonWithIconWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithIconWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonWithIconWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
