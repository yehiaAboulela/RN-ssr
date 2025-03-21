import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { Landing1Component } from './components/landing-1/landing-1.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ServicesComponent } from './components/services/services.component';
import { Landing1ArComponent } from './components/landing-1-ar/landing-1-ar.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/:id', component: BlogDetailsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'book-appointment', component: BookAppointmentComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'privacy-policy', component: PrivacyComponent },
    ],
  },
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: 'offer', component: Landing1Component },
      { path: 'offer-ar', component: Landing1ArComponent },
      { path: 'thanks', component: ThanksComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'thank-you', component: ThankYouComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
