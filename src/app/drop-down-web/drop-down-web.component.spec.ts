import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownWebComponent } from './drop-down-web.component';

describe('DropDownWebComponent', () => {
  let component: DropDownWebComponent;
  let fixture: ComponentFixture<DropDownWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropDownWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
