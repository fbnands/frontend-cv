import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact';
import { FormsModule } from '@angular/forms';
import { Footer } from './components/footer/footer';
import { Home } from "./components/home/home";



@Component({
  
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [FormsModule, ContactComponent, Footer, Home],
 
})
export class App {
  protected readonly title = signal('frontend-cv');

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

}
