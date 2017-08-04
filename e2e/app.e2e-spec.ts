import { MineFwkPage } from './app.po';

describe('mine-fwk App', () => {
  let page: MineFwkPage;

  beforeEach(() => {
    page = new MineFwkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
