import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute // private parmap: ParamMap
  ) {}

  ngOnInit(): void {
    // console.log(this.route);
    // let cor: any = this.route.snapshot.paramMap.get('course');
    // console.log(cor);
    // console.log(typeof cor);
    // this.router.navigate(['/courses']);
    // this.gotoTop(cor);
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    // });
  }
  // gotoTop(id: string) {
  //   // console.log('id is', id);
  //   let el: any = document.getElementById(
  //     'cybersecurity-certification-program'
  //   );
  //   el.scrollTop = el.scrollHeight;
  // }
  // toanc() {
  //   document.getElementById('content').scrollIntoView();
  // }
  getcurrenturl() {
    let url = window.location.href.split('#');
    // let ar = this.router.url.split('#');
    return url[0];
  }
}
