import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OneNightUltimateWerewolfComponent } from './pages/games/one-night-ultimate-werewolf/one-night-ultimate-werewolf.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '一夜终极狼人',
    component: OneNightUltimateWerewolfComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
