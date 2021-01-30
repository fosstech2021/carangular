import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ContactForm:FormGroup;
  RecentPost:any;
  ContactData:any;

  constructor(
    private fb: FormBuilder,
    private register: AaheoService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.ContactForm = this.fb.group({
      email: ["", Validators.required],
      Name: ["", Validators.required],
      Message:[""]

    });
    this.register.getpost().subscribe((res: any) => {
      this.RecentPost = res.data.posts;
      // console.log(this.RecentPost)

    })
    this.Contactdetails();
  }
  ContactUs(){
    var obj = {
      email: this.ContactForm.controls["email"].value,
      name: this.ContactForm.controls["Name"].value,
      comment: this.ContactForm.controls["Message"].value

    }
    console.log(obj)

    this.register.PostcontactUs(obj).subscribe((res: any) => {
       console.log(res)
    
        })
  }

  Contactdetails()
  {
    this.register.getcontactUs().subscribe((res: any) => {
      this.ContactData = res.data.contact_us[0];
      // console.log(this.RecentPost)

    })
  }

}
