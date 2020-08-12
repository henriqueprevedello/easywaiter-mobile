import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.navigate(["/lista-estado"]);
  }

}
