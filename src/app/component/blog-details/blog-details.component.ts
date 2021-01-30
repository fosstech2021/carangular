import { Component, OnInit } from '@angular/core';
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  BlogId:any;
  RecentPost:any;
  Recentcomments:any;
  BlogInformation:any;
  ProductList:any;

  constructor(
    private register: AaheoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((val) => {
      // console.log(val)
      this.BlogId = val.id;
     });

     this.register.getpost().subscribe((res: any) => {
      this.RecentPost = res.data.posts;
      // console.log(this.RecentPost)

    })
    this.register.getComment().subscribe((res: any) => {
      // console.log(res)
      this.Recentcomments = res.data.comments;

    })

     this.register.getpostId(this.BlogId).subscribe((res: any) => {
      this.BlogInformation = res.data;


    })

    this.register.getproduct().subscribe((res: any) => {
      this.ProductList = res.data.products;
      // console.log(this.ProductList)

    })
  }
  blogInfo(id){
    // console.log(id)
    this.router.navigate(['/BlogDetails',{id}])

  }

}
