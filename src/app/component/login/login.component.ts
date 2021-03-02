import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("loginRef", { static: true }) loginElement: ElementRef;

  auth2: any;
  login: FormGroup;
  channel: any = "1";

  constructor(
    private fb: FormBuilder,
    private register: AaheoService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ["", Validators.required],
      pwd: ["", Validators.required],
    });
    this.googleSDK();
  }

  googleSDK() {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.getAuthInstance({
          client_id: "AIzaSyCAU8eYPMz-D91D-IQNwq0cF9UsjvkTL9E",
          cookiepolicy: "single_host_origin",
          scope: "profile email",
        });
        this.prepareLoginButton(document.getElementById("googleBtn"));
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  }
  prepareLoginButton(element) {
    var profile;
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        profile = googleUser.getBasicProfile();
        var IsGoogleLogin = "1";
        var obj = new FormData();

        obj.append("Email", profile.getEmail());
        obj.append("ImageURL", profile.getImageUrl());
        obj.append("Name", profile.getName());
        obj.append("FirstName", profile.getGivenName());
        obj.append("LastName", profile.getFamilyName());
        obj.append("SocialMediaID", profile.getId());
        obj.append("SocialMediaToken", googleUser.getAuthResponse().id_token);
        obj.append("IsGoogleLogin", IsGoogleLogin);

        this.ngZone.run(() => {
          // this.register.loginVerification(obj).subscribe((res: any) => {
          // sessionStorage.setItem("ConsumerId", res.ConsumerId);
          // this.LoaderService.login(this.ConsumerID);
          // if (res.Err == true) {
          //   this.ErrMsg = res.ErrMsg;
          // } else {
          //   $("#signIn").toast("show");
          //   this.UrlNav = localStorage.getItem("url");
          //   this.router.navigateByUrl(this.UrlNav);
          // }
          // });
        });
      },
      (error) => {}
    );
  }

  loginuser() {
    debugger;
    var obj = {
      email: this.login.controls["email"].value,
      password: this.login.controls["pwd"].value,
      channel: this.channel,
      social_auth_token: "",
    };

    this.register.postLogin(obj).subscribe((res: any) => {
      this.register.Setlogindetail(res.data)
      
      this.router.navigate(['/home']);
    });
  }
  registernew() {}
}
