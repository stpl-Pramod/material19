import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material19';
}
