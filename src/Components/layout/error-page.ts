import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="err-wrap">
      <h2>Something went wrong</h2>
      <p>The page you requested cannot be found.</p>
      <a routerLink="/">Back to Home</a>
    </div>
  `,
  styles: ['.err-wrap{max-width:600px;margin:80px auto;text-align:center}']
})
export class ErrorPage {}
