import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

// Feature Module
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
