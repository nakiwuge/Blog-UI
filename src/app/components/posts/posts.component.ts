import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor( private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts =>
     this.posts = posts.data);
  }

}
