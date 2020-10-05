import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() viewDetailUrl: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  @Input() hours: Array<Date>;

  ngOnInit(): void {
  }

}
