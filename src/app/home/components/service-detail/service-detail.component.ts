import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbNav } from '../../../shared/models/breadcrumb-nav';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit {

  formModel = {
    serviceConfigSelected: 0
  };

  sesionConfigurated: 1;

  breadcrumbNav = [
    { label: 'Inicio', routeName: '', active: false },
    { label: 'Servicio', routeName: '', active: true },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate([{ outlets: { header: ['service'] } }], {
      skipLocationChange: true,
    });
  }

}
