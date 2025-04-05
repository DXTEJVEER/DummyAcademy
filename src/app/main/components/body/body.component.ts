import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  getcurrenturl() {
    let url = window.location.href.split('#');
    // let ar = this.router.url.split('#');
    return url[0];
  }
  gotoCourse3() {
    this.router.navigate([
      '/courses',
      { course: 'cybersecurity-certification-program' },
    ]);
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
