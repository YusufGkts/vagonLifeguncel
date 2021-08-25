import { Injectable, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;
  eventClass: boolean = false;
  
  public currentHref: string = "";

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.currentHref = location.path();
      } else {
        this.currentHref = 'Home'
      }
      /* setInterval(()=>{
        if(location.path() != '/admin/index' && location.path() != '/admin' && location.path() != ''){
          this.eventClass = false;
        } else {
          this.eventClass = true;
        }
        // console.log(location.path());
      },500) */
    });
  }
  
  toggleSidebarClass() {
	return this.navSidebarClass = !this.navSidebarClass  ;
  }
  toggleHamburgerClass() {
	return this.hamburgerClass = !this.hamburgerClass  ;
  }
  toggleEventClass() {
    return this.eventClass = !this.eventClass  ;
  }
  
  
  dashboardEventClass() {
  // console.log("test");
    return this.eventClass = true  ;
  }
 
  
}
