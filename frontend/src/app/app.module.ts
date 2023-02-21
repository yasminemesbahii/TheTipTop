import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxWheelModule } from 'projects/ngx-wheel/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { CeleComponent } from '../cele/cele.component';
import { AppComponent } from './app.component';
import { RoueComponent } from 'src/roue/roue.component';
import {ServiceService} from 'src/service/service.service'
import{HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './pageNotfound/logout.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; 
import { RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { EmployerComponent } from 'src/employer/employer.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { SubscribeComponent } from 'src/subscribe/subscribe.component';
import { CookieService } from 'ngx-cookie-service';
import { MatDividerModule } from "@angular/material/divider";
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
 import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DefaultModule } from './adminn/default/default.module';
import { SharedModule} from './shared/shared/shared.module';
import { AddempolyerComponent } from './adminn/addempolyer/addempolyer.component';
import { UserComponent } from 'src/user/user.component';
import { NgToastModule } from 'ng-angular-popup';
import { HomeComponent } from './home/home/home.component';










@NgModule({
  declarations: [
    AppComponent,
    CeleComponent,
    RoueComponent,
    SidenavComponent,
    DashboardComponent,
    AboutusComponent,
    LogoutComponent,
    EmployerComponent,
    SubscribeComponent,
    LoginComponent,
    SignUpComponent,
    AddempolyerComponent,
    UserComponent,
    HomeComponent,
    
    
  
    
    
  
    
   
   
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxWheelModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule, 
    Ng2SearchPipeModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule,
    HighchartsChartModule ,
    ReactiveFormsModule,
    SharedModule,
    DefaultModule ,
    NgToastModule
  ],
  providers: [ServiceService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
