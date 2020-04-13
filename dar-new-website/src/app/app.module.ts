import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './home/welcome.component';
import { LayoutOneComponent } from './layouts/layout-one/layout-one.component';
import { LayoutTwoComponent } from './layouts/layout-two/layout-two.component';
import { LayoutThreeComponent } from './layouts/layout-three/layout-three.component';
import { PageNotFoundComponent } from './page-not-found.component';

// Feature Module
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { ProductModule } from './products/product.module';

import { ProductService } from './products/product.service';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    LayoutOneComponent,
    LayoutTwoComponent,
    LayoutThreeComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule,
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
