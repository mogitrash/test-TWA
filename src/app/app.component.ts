import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import WebApp from '@twa-dev/sdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  onAlert() {
    WebApp.showAlert('Hello world!');
  }
}
