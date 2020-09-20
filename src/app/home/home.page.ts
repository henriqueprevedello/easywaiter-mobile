import {
  Component,
  AfterViewInit,
  OnInit  
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.router.navigate(["/lista-estado"]);
  }
}
