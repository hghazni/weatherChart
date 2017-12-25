import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather Chart';
  chart = [];
  constructor(private _weather: WeatherService) {}

  ngOnInit() {
    this._weather.dailyForecast()
        .subscribe(response => {
          let temp_max = response['list'].map(res => res.main.temp_max);
          let temp_min = response['list'].map(res => res.main.temp_min);
          let alldates = response['list'].map(res => res.dt);

          let weatherDates = [];
          alldates.forEach((res) => {
            let jsdate = new Date(res * 1000);
            weatherDates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}));
          })

            // Chart options
            this.chart = new Chart('canvas', {
              type: 'line',
              data: {
                labels : weatherDates,
                datasets: [
                  {
                    data: temp_max,
                    borderColor: '#3cba9f',
                    fill: false
                  },
                  {
                    data: temp_min,
                    borderColor: '#ffcc00',
                    fill: false
                  },
                ]
              },
              options: {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    display: true
                  }],
                  yAxes: [{
                    display: true
                  }]
                }
              }
            })

        })
  }
}
