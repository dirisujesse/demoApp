import { DataInfosecDashBoardPage } from './app.po';

describe('data-infosec-dash-board App', () => {
  let page: DataInfosecDashBoardPage;

  beforeEach(() => {
    page = new DataInfosecDashBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
