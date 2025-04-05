import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/components/header/header.component';
import { BodyComponent } from './main/components/body/body.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { ContactUsComponent } from './main/components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsComponent } from './main/components/news/news.component';
import { CoursesComponent } from './main/components/courses/courses.component';
import { AboutComponent } from './main/components/about/about.component';
import { CsrComponent } from './main/components/csr/csr.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    NewsComponent,
    CoursesComponent,
    AboutComponent,
    CsrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
