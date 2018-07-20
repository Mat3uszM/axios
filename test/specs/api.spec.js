describe('static api', () => {
  it('should have request method helpers', () => {
    expect(typeof axios.request).toEqual('function');
    expect(typeof axios.get).toEqual('function');
    expect(typeof axios.head).toEqual('function');
    expect(typeof axios.options).toEqual('function');
    expect(typeof axios.delete).toEqual('function');
    expect(typeof axios.post).toEqual('function');
    expect(typeof axios.put).toEqual('function');
    expect(typeof axios.patch).toEqual('function');
  });

  it('should have promise method helpers', () => {
    var promise = axios();

    expect(typeof promise.then).toEqual('function');
    expect(typeof promise.catch).toEqual('function');
  });

  it('should have defaults', () => {
    expect(typeof axios.defaults).toEqual('object');
    expect(typeof axios.defaults.headers).toEqual('object');
  });

  it('should have interceptors', () => {
    expect(typeof axios.interceptors.request).toEqual('object');
    expect(typeof axios.interceptors.response).toEqual('object');
  });

  it('should have all/spread helpers', () => {
    expect(typeof axios.all).toEqual('function');
    expect(typeof axios.spread).toEqual('function');
  });

  it('should have factory method', () => {
    expect(typeof axios.create).toEqual('function');
  });

  it('should have Cancel, CancelToken, and isCancel properties', () => {
    expect(typeof axios.Cancel).toEqual('function');
    expect(typeof axios.CancelToken).toEqual('function');
    expect(typeof axios.isCancel).toEqual('function');
  });
});

describe('instance api', () => {
  var instance = axios.create();

  it('should have request methods', () => {
    expect(typeof instance.request).toEqual('function');
    expect(typeof instance.get).toEqual('function');
    expect(typeof instance.options).toEqual('function');
    expect(typeof instance.head).toEqual('function');
    expect(typeof instance.delete).toEqual('function');
    expect(typeof instance.post).toEqual('function');
    expect(typeof instance.put).toEqual('function');
    expect(typeof instance.patch).toEqual('function');
  });

  it('should have interceptors', () => {
    expect(typeof instance.interceptors.request).toEqual('object');
    expect(typeof instance.interceptors.response).toEqual('object');
  });
});
