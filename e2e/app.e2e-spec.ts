import { Angular2GithubUiPage } from './app.po';

describe('angular2-github-ui App', function() {
  let page: Angular2GithubUiPage;

  beforeEach(() => {
    page = new Angular2GithubUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
