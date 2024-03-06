import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewFlowersShopsWebComponent } from './grid-view-flowers-shops-web.component';

describe('GridViewFlowersShopsWebComponent', () => {
  let component: GridViewFlowersShopsWebComponent;
  let fixture: ComponentFixture<GridViewFlowersShopsWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridViewFlowersShopsWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridViewFlowersShopsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
