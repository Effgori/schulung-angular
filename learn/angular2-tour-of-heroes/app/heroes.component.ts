import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{
    heroes : Hero[];
    selectedHero : Hero;
    addingHero = false;
    error: any;
    
    constructor(private router: Router, private heroService: HeroService) {}
    
    ngOnInit() {
        this.getHeroes();
    }
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }
    
    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }
    
    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService.delete(hero)
                        .then(response => {
                            this.heroes = this.heroes.filter(h => h !== hero);
                            if (this.selectedHero === hero) {
                                this.selectedHero = null;
                            }
                        })
                        .catch(error => this.error = error);
    }
    
    onSelect(hero : Hero) { this.selectedHero = hero; }
    
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}