import { Component } from '@angular/core';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather Chart';
  constructor(private _weather: WeatherService) {}

  ngOnInit() {
    this._weather.dailyForecast()
        .subscribe(response => {
          console.log(response);
        });
  }
}
