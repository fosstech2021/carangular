import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AaheoService } from 'src/app/service/aaheo.service';

@Component({
  selector: 'app-parent-folder',
  templateUrl: './parent-folder.component.html',
  styleUrls: ['./parent-folder.component.css']
})
export class ParentFolderComponent implements OnInit {

  constructor(     private route: ActivatedRoute , private register: AaheoService ) { }
  YearID:any;
  ParentFolderList: any;
  child_foldersData : any;
  child_service_type_containerData : any;
  @ViewChild('closebutton') closebutton;

  ngOnInit(): void {
    debugger;
    this.route.params.subscribe((val) => {
      this.YearID = val.id;
     });
     this.GetParentFolder(this.YearID)
  }

  GetParentFolder(Value)
  {
  this.register.GetParentFolder(Value).subscribe((res: any) => {
    console.log(res);
    this.ParentFolderList = res.data.folders;

  })
  }

  PopUpModel(value)
  {
    debugger;
     this.child_foldersData =value.child_folders;
     this.child_service_type_containerData = value.child_service_type_container
  }

  ngOnDestroy()
  {
    this.closebutton.nativeElement.click();
  }
}
