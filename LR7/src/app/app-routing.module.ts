import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PostsComponent} from "./posts/posts.component";
import { PostComponent } from './post/post.component';

const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent}
  ]
@NgModule({
  imports:[RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
