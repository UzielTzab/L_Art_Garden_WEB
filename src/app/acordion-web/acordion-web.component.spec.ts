import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionWebComponent } from './acordion-web.component';

describe('AcordionWebComponent', () => {
  let component: AcordionWebComponent;
  let fixture: ComponentFixture<AcordionWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcordionWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcordionWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
