import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactForm:FormGroup;
  ContactData:any;

  constructor(private fb: FormBuilder,
    private register: AaheoService,
    private router: Router) { }

  ngOnInit(): void {

    this.ContactForm = this.fb.group({
      email: ["", Validators.required],
      Name: ["", Validators.required],
      Message:[""]

    });
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
