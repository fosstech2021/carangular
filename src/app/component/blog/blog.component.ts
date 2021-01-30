import { Component, OnInit } from '@angular/core';
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  RecentPost:any;
  Recentcomments:any;
  ProductList:any;

  constructor(
    private register: AaheoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.register.getpost().subscribe((res: any) => {
      this.RecentPost = res.data.posts;
      // console.log(this.RecentPost)

    })
    this.register.getComment().subscribe((res: any) => {
      // console.log(res)
      this.Recentcomments = res.data.comments;

    })

    this.register.getproduct().subscribe((res: any) => {
      this.ProductList = res.data.products;
      // console.log(this.ProductList)

    })

  }
  // blogInfo(id){
  //   // console.log(id)
  //   this.router.navigate(['/BlogDetails',{id}])

  // }


}
