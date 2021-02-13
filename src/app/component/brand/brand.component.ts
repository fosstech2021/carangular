import { Component, OnInit } from '@angular/core';
import { AaheoService } from 'src/app/service/aaheo.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
constructor( private register: AaheoService ) { }

BrandList : any ;

  ngOnInit(): void {
    this.GetBrand();
  }

  GetBrand()
  {
  this.register.GetBrand().subscribe((res: any) => {
   debugger;
    this.BrandList = res.data.brands;

  })
  }
}
