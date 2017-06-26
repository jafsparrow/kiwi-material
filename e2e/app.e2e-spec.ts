import { MyMaterialPage } from './app.po';

describe('my-material App', () => {
  let page: MyMaterialPage;

  beforeEach(() => {
    page = new MyMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
