import { Component, OnInit } from '@angular/core';
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.css']
})
export class TcComponent implements OnInit {
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

    })
    this.register.getComment().subscribe((res: any) => {
      this.Recentcomments = res.data.comments;
      // console.log(this.Recentcomments)

    })
    this.register.getproduct().subscribe((res: any) => {
      this.ProductList = res.data.products;
      // console.log(this.ProductList)

    })
  }

}
