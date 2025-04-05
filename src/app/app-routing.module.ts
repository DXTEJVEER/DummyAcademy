import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/components/about/about.component';
import { BodyComponent } from './main/components/body/body.component';
import { ContactUsComponent } from './main/components/contact-us/contact-us.component';
import { CoursesComponent } from './main/components/courses/courses.component';
import { CsrComponent } from './main/components/csr/csr.component';
import { NewsComponent } from './main/components/news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: BodyComponent },
  // { path: 'home', component: BodyComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'csr', component: CsrComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', component: PageNotFoundComponent },
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
