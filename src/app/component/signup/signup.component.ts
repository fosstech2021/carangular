import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from "@angular/core";
import {
  EmailValidator,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { AaheoService } from "../../service/aaheo.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder, private register: AaheoService) {}

  MyRegisterForm: FormGroup;
  PopupMessage :boolean = false;

  ngOnInit(): void {
    this.MyRegisterForm = this.fb.group({
      first_name: [""],
      last_name: [""],
      username: ["", Validators.required],
      Useremail: ["", Validators.required ],
      password: ["", Validators.required],
      passwordRetype: ["", Validators.required],
    } ,  { validators: this.passwordmatchValues });
  }

  passwordmatchValues(group: FormGroup) {
    // here we have the 'passwords' group
    const password = group.get("password").value;
    const confirmPassword = group.get("passwordRetype").value;
     let result = password == confirmPassword ? null : { notSame: true };
     group.get("passwordRetype").setErrors(result);
     return result;
  }

  RegisterUser() {
    debugger;
    var obj = {
      email: this.MyRegisterForm.controls["Useremail"].value,
      password: this.MyRegisterForm.controls["password"].value,
      first_name: this.MyRegisterForm.controls["first_name"].value,
      last_name: this.MyRegisterForm.controls["last_name"].value,
      username: this.MyRegisterForm.controls["username"].value,
      channel: "1",
      social_auth_token: "",
    };

    this.register.RegisterUser(obj).subscribe((res: any) => {

      if(res.success)
      {
this.PopupMessage = true;
      }else{
        this.PopupMessage = false;
      }
      debugger;
    });
  }
}
