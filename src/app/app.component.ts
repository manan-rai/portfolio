import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { ContactComponent } from "./shared/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.applyTheme('dark');
    } else {
      this.applyTheme('light');
    }
  }
  
  applyTheme(theme: string) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
  }
}
