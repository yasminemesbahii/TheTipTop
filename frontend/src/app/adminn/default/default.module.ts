import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../../adminn/default/default.component';
import { DashbordComponent } from '../../adminn/dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from 'src/admin/admin.component';
import { DashboardClientComponent } from '../../adminn/dashboard-client/dashboard-client.component';
import { ReclamationEmployerComponent } from '../../adminn/reclamation-employer/reclamation-employer.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { PostsComponent } from '../posts/posts.component';
import { UserDashbordComponent } from '../../adminn/user-dashbord/user-dashbord.component';
import { NgToastModule } from 'ng-angular-popup';
@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    PostsComponent,
    AdminComponent,
    DashboardClientComponent,
    UserDashbordComponent,
    ReclamationEmployerComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgToastModule
  ],
  
})
export class DefaultModule { }
