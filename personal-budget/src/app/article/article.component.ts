import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
