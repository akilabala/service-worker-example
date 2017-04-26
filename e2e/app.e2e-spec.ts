import { ServiceWorkerExamplePage } from './app.po';

describe('service-worker-example App', () => {
  let page: ServiceWorkerExamplePage;

  beforeEach(() => {
    page = new ServiceWorkerExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
