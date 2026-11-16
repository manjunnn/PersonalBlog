
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    }).compileComponents();
  });

  it('should create the application', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display the blog title', async () => {
    const fixture = TestBed.createComponent(App);

    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;

    expect(
      element.querySelector('h1')?.textContent
    ).toContain("Manjunatha's Tech Blog");
  });
});
