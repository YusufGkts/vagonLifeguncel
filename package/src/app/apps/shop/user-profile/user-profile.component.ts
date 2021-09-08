import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { user, USERS } from '../ecom-customers/ecom-customers.component';
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userDetails: user[];
  userDetail: any;
  userPrivateDetail;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public dialog: MatDialog
  ) {
    this.userDetails = USERS;
  }
  openDialog() {
    const dialogRef = this.dialog.open(_UserProfileDialog);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {
    this.userDetail = history.state.data.userDetail;
    console.log(this.userDetail);
  }
}

@Component({
  selector: 'user-profile-dialog',
  templateUrl: 'user-profile-dialog.html',
})
export class _UserProfileDialog {}
