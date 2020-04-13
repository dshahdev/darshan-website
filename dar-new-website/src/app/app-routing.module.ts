import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './about/about.component';
import { LayoutOneComponent } from './layouts/layout-one/layout-one.component';
import { LayoutTwoComponent } from './layouts/layout-two/layout-two.component';
import { LayoutThreeComponent } from './layouts/layout-three/layout-three.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'layout-one', component: LayoutOneComponent},
  { path: 'layout-two', component: LayoutTwoComponent},
  { path: 'layout-three', component: LayoutThreeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent},
  
  

]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
