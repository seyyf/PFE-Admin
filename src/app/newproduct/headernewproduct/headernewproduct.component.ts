import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-headernewproduct',
  templateUrl: './headernewproduct.component.html',
  styleUrls: ['./headernewproduct.component.css']
})
export class HeadernewproductComponent implements OnInit {

  faHome = faHome;
  faUser = faUser;
  faList = faList;
  constructor() { }

  ngOnInit(): void {
  }

}
