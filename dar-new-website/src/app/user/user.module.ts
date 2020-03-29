
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from'@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ],
//   exports: [RouterModule]
})
export class UserModule { }