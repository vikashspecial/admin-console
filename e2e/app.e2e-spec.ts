import { LoginmanagerPage } from './app.po';

describe('loginmanager App', () => {
  let page: LoginmanagerPage;

  beforeEach(() => {
    page = new LoginmanagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
