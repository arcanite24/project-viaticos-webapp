import { ProjectViaticosWebappPage } from './app.po';

describe('project-viaticos-webapp App', () => {
  let page: ProjectViaticosWebappPage;

  beforeEach(() => {
    page = new ProjectViaticosWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
