//
//  HOW DOES THIS GET USED?
//
//  AppComponent:
//    - ngOnInit() -> this.getHeroes();
//    - getHeroes() -> this.heroService.getHeroes();
//    - HeroService was imported, set as a provider, and constructed
//
//  HeroService:
//    - getHeroes() -> returns HEROES
//    - HEROES was imported from this file.
//
//  Here:
//  - data in export variable
//
//  All strictly typed along the way using Hero class in each file
//

import { Hero } from './hero';

// HEROES array, all of type Hero (via imported class above)
// export - so it can be imported by other files
export const HEROES : Hero[] = [
  {
    id: 1,
    name: "One Guy"
  },
  {
    id: 2,
    name: "Two Guys"
  },
  {
    id: 3,
    name: "Three Guys"
  },
  {
    id: 4,
    name: "Four Guys"
  },
  {
    id: 5,
    name: "Five Guys. UGH SO HUNGRY"
  }
]
