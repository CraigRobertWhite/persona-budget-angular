import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  articles = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/articles').subscribe(response => {
      this.articles = response['articles'];
    });
  }
}
