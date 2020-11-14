import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {Post, PostsService} from '../posts.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  post: Post | undefined; 
  constructor(private router: ActivatedRoute, private postS: PostsService, private routers: Router) {}
  ngOnInit(): void {
    this.router.params.subscribe((param)=>{
      this.post = this.postS.getById(+param.id) })    
  }
  goToOwner() {
    this.routers.navigate(['/'])
  }  
  Load4Posts() {
    console.log(this.postS);
  } 
}
