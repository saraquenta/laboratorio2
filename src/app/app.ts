import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarComponent } from "./components/avatar/avatar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AvatarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('laboratorio2');
}
