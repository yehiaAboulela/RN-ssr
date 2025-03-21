import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutHeaderComponent } from './components/about/about-header/about-header.component';
import { AboutComponent } from './components/about/about.component';
import { ImageSliderComponent } from './components/about/image-slider/image-slider.component';
import { TimlineComponent } from './components/about/timline/timline.component';
import { WordAboutUsComponent } from './components/about/word-about-us/word-about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutSecComponent } from './components/home/about-sec/about-sec.component';
import { CarouselSecComponent } from './components/home/carousel-sec/carousel-sec.component';
import { ComparisonSliderComponent } from './components/home/comparison-slider/comparison-slider.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HomeOutroSecComponent } from './components/home/home-outro-sec/home-outro-sec.component';
import { HomeComponent } from './components/home/home.component';
import { LocationSecComponent } from './components/home/location-sec/location-sec.component';
import { ProductsComponent } from './components/home/products/products.component';
import { SolutionsSecComponent } from './components/home/solutions-sec/solutions-sec.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesComponent } from './components/services/services.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { NanoCeramicProdsComponent } from './components/services/nano-ceramic-prods/nano-ceramic-prods.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { NanoGrapheneProdsComponent } from './components/services/nano-graphene-prods/nano-graphene-prods.component';
import { PpfComponent } from './components/services/ppf/ppf.component';
import { ThermalInsulationComponent } from './components/services/thermal-insulation/thermal-insulation.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgOptimizedImage } from '@angular/common';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { provideHttpClient } from '@angular/common/http';
import { HeaderAltComponent } from './components/home/header-alt/header-alt.component';
import { ImagesComponent } from './components/gallery/images/images.component';
import { VideosComponent } from './components/gallery/videos/videos.component';
import { CareersComponent } from './components/careers/careers.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { Landing1Component } from './components/landing-1/landing-1.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { Landing1ArComponent } from './components/landing-1-ar/landing-1-ar.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    HeaderComponent,
    ProductsComponent,
    AboutSecComponent,
    SolutionsSecComponent,
    LocationSecComponent,
    CarouselSecComponent,
    HomeOutroSecComponent,
    FooterComponent,
    ComparisonSliderComponent,
    AboutHeaderComponent,
    ImageSliderComponent,
    WordAboutUsComponent,
    TimlineComponent,
    SafePipe,
    NanoCeramicProdsComponent,
    BlogComponent,
    BlogDetailsComponent,
    NanoGrapheneProdsComponent,
    PpfComponent,
    ThermalInsulationComponent,
    GalleryComponent,
    BookAppointmentComponent,
    HeaderAltComponent,
    ImagesComponent,
    VideosComponent,
    CareersComponent,
    PrivacyComponent,
    Landing1Component,
    LandingLayoutComponent,
    MainLayoutComponent,
    Landing1ArComponent,
    ThanksComponent,
    ConfirmationComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
