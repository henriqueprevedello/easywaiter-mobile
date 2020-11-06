import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticacaoService } from './core/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss', '../sass/main.css']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {
    this.initializeApp();
    if (!this.autenticacaoService.possuiUsuarioLogado) {
      this.router.navigate(['/login']);
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.autenticacaoService.logout();
    this.router.navigate(['/login']);
  }
}
