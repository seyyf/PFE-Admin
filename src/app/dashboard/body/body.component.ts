import { Component, OnInit } from '@angular/core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  faSignal = faSignal;
  faUserFriends = faUserFriends;
  
  constructor() { }

  ngOnInit(): void {
  }

}
