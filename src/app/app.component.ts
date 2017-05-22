import { Component, HostBinding } from '@angular/core';
import {slideInDownAnimation} from './animations';


// import {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class AppComponent {
  title = 'app works!';

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
}
