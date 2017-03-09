import { NgCustomHeadersPage } from './app.po';

describe('ng-custom-headers App', () => {
  let page: NgCustomHeadersPage;

  beforeEach(() => {
    page = new NgCustomHeadersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
