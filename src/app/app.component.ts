import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WebApp from '@twa-dev/sdk';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    WebApp.showAlert('Hello world!');
  }
}
