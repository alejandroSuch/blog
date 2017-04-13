import { AccessParentPage } from './app.po';

describe('access-parent App', () => {
  let page: AccessParentPage;

  beforeEach(() => {
    page = new AccessParentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
