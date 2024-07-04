import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutopartsGeneralComponent } from './autoparts-general/autoparts-general.component';
import { AutopartsAboutComponent } from './autoparts-about/autoparts-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autoparts',
    pathMatch: 'full'
  },
  {
    path: 'autoparts',
    component: AutopartsGeneralComponent
  },
  {
    path: 'about',
    component: AutopartsAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
