import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';




//
// Cheeky little encapsulated interface/class example while we're here
//

// a Person must have firstName and lastName
interface Person {
  firstName: string;
  lastName: string;
}

// a Student has firstName, lastName and whatever else it wants
class Student {
  fullName: string;
  // 'public' automatically creates that variable for the object
  constructor(public firstName : string, public lastName : string) {
    this.fullName = firstName + lastName;
  }
}

// greeter() accepts anything matching a Person interface (i.e. has firstName, lastName)
function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// create Student object
var user = new Student("Macaulay", "Culkin");

// run greeter function for user Student object
console.log(greeter(user));







@Component({
  selector: 'my-heroes',
  /*
    {{foo}} is one-way binding
    [(ngModel)] via angular FormsModule is two-way
   */

  template: `
    <ul class="heroes">
      <li
        *ngFor="let hero of heroes"
        (click)="onSelect(hero)"

        [class.selected]="(hero === selectedHero)"
      >
      <!-- ^^ Apply class .selected when () is true -->
        {{hero.name}}
      </li>
    </ul>

    <!-- add a hero detail component and
    bind hero in the child HeroDetailComponent to this selectedHero in parent -->
    <hero-detail
      [hero]="selectedHero"
    ></hero-detail>
  `,

  /*
    styles here are scoped to this @Component
   */
  styles: [`
    .heroes {
      border: 1px solid gray;
    }
    .selected {
      background: dodgerblue;
      color: white;
    }
  `],

  // providers makes it create a fresh instance of these.
  // AppComponent and children can now use them
  providers: [HeroService]
})

// Implements OnInit lets us use ngOnInit()
export class AppComponent implements OnInit {
  name = 'Rock Sheffield';
  heroes : Hero[];
  selectedHero: Hero; // default no value, type Hero
  //selectedHero = this.hero : Hero; // default

  onSelect(hero: Hero): void {
    console.log('selected: ' + hero.name);
    this.selectedHero = hero;
  }

  // The constructor itself does nothing. The parameter simultaneously defines a
  // private heroService property and identifies it as a HeroService injection site.
  // Now Angular knows to supply an instance of the HeroService when it creates an AppComponent.
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    // Get heroes instantly (before promise)
    // this.heroes = this.heroService.getHeroes();
    //
    // run getHeroes, and _then_ when promise returns, as a function
    // use its parameter to set the heroes variable
    this.heroService.getHeroes()
      .then(heroes => {
        this.heroes = heroes
      });
  }

  // Get and set heroes var after initialised, rather than during construction
  ngOnInit() : void {
    this.getHeroes();
  }
}
