import {Injectable} from "@angular/core";
import {HEROES} from "./heroes";
import {Hero} from "./hero";
import {of} from "rxjs/observable/of";

@Injectable()
export class HeroService {
  constructor() {
  }

  getHero(): Hero[] {
    return (HEROES);
  }
}
