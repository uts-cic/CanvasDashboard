/**
 * Entry point of the app
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private navbarCollapse = true;

  /**
   * Toggles navbar menu for mobile view
   */
  toggleNavbar(): void {
    this.navbarCollapse = !this.navbarCollapse;
  }
}
