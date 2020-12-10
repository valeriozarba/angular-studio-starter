import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageComponentComponent } from './pages/page-component/page-component.component';


const routes: Routes = [
  { path: '',   component: HomeComponent  },
  { path: 'prodotti', component: PageComponentComponent  },
  { path: 'azienda', component: PageComponentComponent  },
  { path: 'galleria', component: PageComponentComponent  },
  { path: 'contatti', component: HomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
