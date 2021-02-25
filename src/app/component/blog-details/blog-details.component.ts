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
  Commentsdata : any;

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
 
     this.register.getpostId(this.BlogId).subscribe((res: any) => {
      this.BlogInformation = res.data;


    })

    this.register.getproduct().subscribe((res: any) => {
      this.ProductList = res.data.products;
      // console.log(this.ProductList)

    })

    this.GetBlogComment();
  }


  GetBlogComment()
  {
    
    this.register.getBlogComment(this.BlogId).subscribe((res: any) => {
      // console.log(res)
      this.Recentcomments = res.data.comments;

    })

  }
  blogInfo(id){
    // console.log(id)
    this.router.navigate(['/BlogDetails',{id}])

  }

  ShareComment( value)
  {
    this.Commentsdata =  { 
      name: "string",
      email: "string",
      comment: value,
      web_url: "string",
      approved: false,
      post_id : this.BlogId,
      users_id: 1
    };

    this.register.SaveBlogComment(this.Commentsdata).subscribe((res: any) => {
     
      this.GetBlogComment();

    })
   
  }

}
