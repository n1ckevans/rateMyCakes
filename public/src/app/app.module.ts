import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { RatingComponent } from './rating/rating.component';
import { ShowCakeComponent } from './show-cake/show-cake.component';
// import { CakeComponent } from './cake/cake.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    ShowCakeComponent,
    // CakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
