import { AngularSegmentTestPage } from './app.po';

describe('angular-segment-test App', () => {
  let page: AngularSegmentTestPage;

  beforeEach(() => {
    page = new AngularSegmentTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
