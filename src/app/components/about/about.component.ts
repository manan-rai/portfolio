import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public name: string = 'Manan rai';
  activeTheme = 'default'; 

  toggleTheme(theme: string) {
    this.activeTheme = theme; 
    if (theme === "default") {
      const defTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (defTheme) {
        document.body.classList.remove('light-mode')
        document.body.classList.add(`dark-mode`);
      } else {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
      }
    }
    else if (theme === "light") {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
    }
    else {
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
    }
  }
}
