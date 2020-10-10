import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'pb-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  routeName: string;

  constructor(private route:ActivatedRoute) {
    this.routeName = route.data['value'].routeName
  }

  ngOnInit(): void {
  }

}
