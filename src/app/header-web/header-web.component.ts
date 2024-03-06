import { Component } from '@angular/core';
import { DropDownWebComponent } from '../drop-down-web/drop-down-web.component';
import { ButtonWithIconWebComponent } from '../button-with-icon-web/button-with-icon-web.component';

@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [DropDownWebComponent, ButtonWithIconWebComponent],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.css'
})
export class HeaderWebComponent {

}

// rgb(255, 140, 0)
