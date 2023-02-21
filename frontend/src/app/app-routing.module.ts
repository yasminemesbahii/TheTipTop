import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/admin/admin.component';
import { EmployerComponent } from 'src/employer/employer.component';
import { RoueComponent } from 'src/roue/roue.component';
import { UserComponent } from 'src/user/user.component';
import { CeleComponent } from '../cele/cele.component';
import { SubscribeComponent } from 'src/subscribe/subscribe.component';
import { DashboardComponent } from 'src/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DefaultComponent } from './adminn/default/default.component';
import { DashbordComponent } from './adminn/dashbord/dashbord.component';
import { PostsComponent } from './adminn/posts/posts.component';
import { AddempolyerComponent } from './adminn/addempolyer/addempolyer.component';
import { DashboardClientComponent } from './adminn/dashboard-client/dashboard-client.component';
import { SidebarclientComponent } from './shared/components/sidebarclient/sidebarclient.component';
import { UserDashbordComponent } from './adminn/user-dashbord/user-dashbord.component';
import { ReclamationEmployerComponent } from './adminn/reclamation-employer/reclamation-employer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutComponent } from './pageNotfound/logout.component';


const routes: Routes = [
 {path:'roue',component:RoueComponent},
 {path:'celebration',component:CeleComponent},
 {path:'user',component:UserComponent},
 {path:'employer',component:EmployerComponent},
 {path:'subscribed',component:SubscribeComponent},
 {path:'statistique',component:DashboardComponent},
 {path:'login',component:LoginComponent},
 {path:'sign-up', component:SignUpComponent},
 {path:'AddEmp', component:AddempolyerComponent},
 {path:'NumeroT',component:SidenavComponent},
 {path:'MesGains',component:DashboardClientComponent},
 {path:'Reclamation',component:UserDashbordComponent},
 {path:'ReclamationEMP',component:ReclamationEmployerComponent},
 {path:'ReseauxSo',component:AboutusComponent},
 {path:'home',component:HomeComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'admin',

    component:DefaultComponent,

  children:[{

    path:'admin',

    component:DashbordComponent

  },

  {path:'Session',component:PostsComponent},
  {path:'Tirage',component:AdminComponent},
]},
{path:'**',component:LogoutComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
  
})
export class AppRoutingModule { }
//export const routingComponents = [AppComponent,CeleComponent]
