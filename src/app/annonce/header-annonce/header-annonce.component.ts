import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-annonce',
  templateUrl: './header-annonce.component.html',
  styleUrls: ['./header-annonce.component.css']
})
export class HeaderAnnonceComponent implements OnInit {

  faHome = faHome;
  faUser = faUser; 
  faList = faList;
  constructor() { }

  ngOnInit(): void {
  }

}
