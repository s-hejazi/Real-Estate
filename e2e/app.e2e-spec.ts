import { RealEstateUIPage } from './app.po';

describe('real-estate-ui App', function() {
  let page: RealEstateUIPage;

  beforeEach(() => {
    page = new RealEstateUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
