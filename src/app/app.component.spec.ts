import { AppComponent } from './app.component';
describe('hello word', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent()
  })

  it('測試', () => {
    expect(fixture.title).toEqual('jestTest')
  })
})
