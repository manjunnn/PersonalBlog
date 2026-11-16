
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  HealthService,
  HealthResponse
} from './core/services/health';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly healthService = inject(HealthService);

  readonly title = "Manjunatha's Tech Blog";

  readonly health = signal<HealthResponse | null>(null);
  readonly loading = signal(false);
  readonly error = signal('');

  checkApiHealth(): void {
    this.loading.set(true);
    this.error.set('');
    this.health.set(null);

    this.healthService.getHealth().subscribe({
      next: (response) => {
        this.health.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(
          'Unable to connect to the backend API.'
        );
        this.loading.set(false);
      }
    });
  }
}
