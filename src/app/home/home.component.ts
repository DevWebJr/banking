import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayAccounts() {
    if(this.display == false) {
      this.display = true;
    } else {
      this.display = false;
    }
  }
}
