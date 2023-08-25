import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post-model';
import { faArrowUp, faComments, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})

export class PostTileComponent implements OnInit {

  @Input() posts: any;
 
  faComments = faComments;
  

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }
  ngOnInit(): void {
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
