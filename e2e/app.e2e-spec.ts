import { GtubePage } from './app.po';

describe('gtube App', () => {
  let page: GtubePage;

  beforeEach(() => {
    page = new GtubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
