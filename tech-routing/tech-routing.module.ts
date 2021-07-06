import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../component/web/web.component';
import { JavaComponent } from '../component/java/java.component';
import { CorejavaComponent } from '../component/corejava/corejava.component';
import { AdvjavaComponent } from '../component/advjava/advjava.component';
import { AngularComponent } from '../component/angular/angular.component';
import { JavafeaturesComponent } from '../component/javafeatures/javafeatures.component';

const routes: Routes = [
  {path:'web', component:WebComponent,
  children : [
    {path:'corejava', component:JavafeaturesComponent },
    {path:'advjava', component:AngularComponent},
   ]
},
  {path:'java', component:JavaComponent ,
  
  children : [
    {path:'corejava', component:CorejavaComponent },
    {path:'advjava', component:AdvjavaComponent},
   ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent, JavaComponent, CorejavaComponent, AdvjavaComponent]