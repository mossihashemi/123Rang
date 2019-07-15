import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AuthService } from './auth.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ContactComponent,
    AboutComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    CheckOutComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },

      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGaurdService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGaurdService] },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurdService] },


      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGaurdService, AdminAuthGuardService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGaurdService, AdminAuthGuardService] },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGaurdService, AdminAuthGuardService] },

    ])
  ],
  providers: [
    AuthService,
    AuthGaurdService,
    UserService,
    AdminAuthGuardService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
