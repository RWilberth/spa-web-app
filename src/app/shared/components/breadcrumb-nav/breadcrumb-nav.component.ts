import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-nav',
  templateUrl: './breadcrumb-nav.component.html',
  styleUrls: ['./breadcrumb-nav.component.scss']
})
export class BreadcrumbNavComponent implements OnInit {

  @Input() urls: { routeName: string, label: string, active: boolean }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
