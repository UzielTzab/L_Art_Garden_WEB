import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderWebComponent } from './header-web/header-web.component';
import { GridViewFlowersShopsWebComponent } from './grid-view-flowers-shops-web/grid-view-flowers-shops-web.component';
import { CarouselWebComponent } from './carousel-web/carousel-web.component';
import { AcordionWebComponent } from './acordion-web/acordion-web.component';
import { ButtonWithIconWebComponent } from './button-with-icon-web/button-with-icon-web.component';
import { FooterWebComponent } from './footer-web/footer-web.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet,HeaderWebComponent, GridViewFlowersShopsWebComponent,CarouselWebComponent, AcordionWebComponent,ButtonWithIconWebComponent,FooterWebComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'L_Art_Garden_Web';
}
