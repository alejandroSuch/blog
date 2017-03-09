import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planets: any = null;

  constructor(private http: Http, private authService: AuthService) {
  }


  ngOnInit(): void {
  }

  public getPlanets() {
    this.http
      .get('http://swapi.co/api/planets/1/')
      .map((res: Response) => res.json() || {})
      .subscribe(
        planets => this.planets = planets,
        error => this.planets = null
      );
  }

  setTokenAndGetPlanets() {
    this.authService.token = btoa('hello');
    this.getPlanets();
  }

  clearTokenAndGetPlanets() {
    this.authService.token = null;
    this.getPlanets();
  }

}
