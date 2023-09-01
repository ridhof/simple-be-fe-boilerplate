import { renderHelloWorld } from './api-hello-lib';

describe('apiHelloLib', () => {
  it('should work', () => {
    expect(renderHelloWorld()).toEqual('api-hello-lib');
  });
});
