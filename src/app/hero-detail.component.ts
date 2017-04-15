import { Component, Input } from '@angular/core';
// ^ means we can use @Component, @Input
import { Hero } from './hero';

// @Component decorator provides metadata for component such as its selector
@Component({
  selector: 'hero-detail', // tag name of created element
  template: `
    <!-- show div only if hero exists: -->
    <div *ngIf="hero">
      <h1>{{hero.name}}</h1>
      from {{name}}<br />
      <input [(ngModel)]="hero.name" placeholder="{{hero.name}}">
    </div>
  `
})

// export the component class because you'll import it elsewhere
export class HeroDetailComponent {
  // var hero; (of type Hero)
  //hero: Hero;

  // input property, hero, of type Hero
  @Input() hero: Hero;
}
