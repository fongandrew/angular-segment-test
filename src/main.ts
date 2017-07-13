import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Interface should be visible too
declare const notAnalytics: SegmentAnalytics.AnalyticsJS;
notAnalytics.page("SOME_PAGE");


platformBrowserDynamic().bootstrapModule(AppModule);
