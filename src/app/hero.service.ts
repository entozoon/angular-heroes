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


/*

myfunc() {
  returns heroes;
}


let p = new Promise((resolve, reject) => {
  $.ajax({
    data: {

    },
    sucess : (data) => {
      resolve(data.id);
    }
  });
}).then((resolve, id) => {
  // the code that runs here
  $.ajax({
    data : {
      id
    },
    success : () => {
      resolve(true)
    },
    fail : () {
      reject("ajax failed");
    }
  })
});


let pb = new Promise((resolve, reject) => {
  $.ajax({
    data: {

    },
    sucess : (data) => {
      resolve(data.id);
    }
  });
})

let pc = Promise.resolve(2);

Promise.all((p, pb, pc) => {

}).catch() {
operation failwed
};

*/
