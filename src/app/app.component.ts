import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  test() {
    analytics.identify("my-uid");
    analytics.track("MY_EVENT", { prop: 123 });
  }
}
