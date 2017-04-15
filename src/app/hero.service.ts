import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Decorator specifies that it can have dependencies injected in
@Injectable()

export class HeroService {
  // // Method of type Hero array, returns HEROES from service.
  // // (so it needs to import Hero class, and HEROES service)
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  //
  // Method of type promised Hero array, returns HEROES from service.
  // (so it needs to import Hero class, and HEROES service)
  getHeroes(): Promise<Hero[]> {
    // Return a resolved promise function
    console.log(HEROES);
    return Promise.resolve(HEROES);
  }

  // Simulate if it ran slowly
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
