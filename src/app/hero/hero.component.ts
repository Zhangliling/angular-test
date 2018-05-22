import {Component, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {HEROES} from "../heroes";
import {Hero} from "../hero";

@Component({
  selector: 'hero-app',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heros = HEROES;
  selectHero: Hero;

  constructor(private heroService: HeroService) {
  }

  getHero(): void {
    this.heros = this.heroService.getHero();
  }

  onselectHero(hero: Hero): void {
    this.selectHero = hero;
  }

  ngOnInit(): void {
    this.getHero();
  }
}
