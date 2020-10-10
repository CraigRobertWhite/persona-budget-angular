import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Chart} from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  articles = [];
  chartData = {
    datasets: [{
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgb(255,80,239)'
      ]
    }],
    labels: []
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getArticles();
    this.getExpenses();
  }

  getArticles(): void {
    this.http.get('/articles').subscribe(response => {
      this.articles = response['articles'];
    });
  }

  getExpenses(): void {
    this.http.get('/budget').subscribe(response => {
      response['expenses'].forEach(expense => {
        this.chartData.datasets[0].data.push(expense.amount);
        this.chartData.labels.push(expense.type);
      });

      this.createChart()
    });
  }

  createChart() {
    let context = document.getElementById('budget-chart');
    new Chart(context, {
      type: 'doughnut',
      data: this.chartData
    });
  }
}
