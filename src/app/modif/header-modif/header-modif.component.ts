import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-modif',
  templateUrl: './header-modif.component.html',
  styleUrls: ['./header-modif.component.css']
})
export class HeaderModifComponent implements OnInit {

  faHome = faHome;
  faUser = faUser;
  faList = faList;
  constructor() { }

  ngOnInit(): void {
  }

}
