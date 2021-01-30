import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AaheoService } from '../app//service/aaheo.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ProductComponent } from './component/product/product.component';
import { BlogComponent } from './component/blog/blog.component';
import { TcComponent } from './component/tc/tc.component';
import { LoginComponent } from './component/login/login.component';
import { FilterServiceComponent } from './component/filter-service/filter-service.component';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { BlogDetailsComponent } from './component/blog-details/blog-details.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'ProductInfo/:id', component: ProductInfoComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'BlogDetails/:id', component: BlogDetailsComponent },
  { path: 'Tc', component: TcComponent },
  { path: 'Contact', component: ContactUsComponent },
  { path: 'Service', component: FilterServiceComponent },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    ProductComponent,
    BlogComponent,
    TcComponent,
    LoginComponent,
    FilterServiceComponent,
    ProductInfoComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AaheoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
