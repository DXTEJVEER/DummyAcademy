import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentyear: Number = 0;
  constructor() {}

  ngOnInit(): void {
    this.currentyear = new Date().getFullYear();
  }
}
