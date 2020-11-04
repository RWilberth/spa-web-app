import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbNav } from '../../models/breadcrumb-nav';

@Component({
  selector: 'app-breadcrumb-nav',
  templateUrl: './breadcrumb-nav.component.html',
  styleUrls: ['./breadcrumb-nav.component.scss']
})
export class BreadcrumbNavComponent implements OnInit {

  @Input() urls: Array<BreadcrumbNav>;

  testBoolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
