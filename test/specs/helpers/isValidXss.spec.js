var isValidXss = require('../../../lib/helpers/isValidXss');

describe('helpers::isValidXss', function () {
  it('should detect script tags', function () {
    expect(isValidXss("<script/xss>alert('blah')</script/xss>")).toBe(true);
    expect(isValidXss("<SCRIPT>alert('getting your password')</SCRIPT>")).toBe(true);
    expect(isValidXss("<script src='http://xssinjections.com/inject.js'>xss</script>")).toBe(true);
    expect(isValidXss("<img src='/' onerror='javascript:alert('xss')'>xss</script>")).toBe(true);
    expect(isValidXss("<script>console.log('XSS')</script>")).toBe(true);
    expect(isValidXss("onerror=alert('XSS')")).toBe(true);
    expect(isValidXss("onmouseover=alert('XSS')")).toBe(true);
    expect(isValidXss("onkeyup=alert('XSS')")).toBe(true);
    expect(isValidXss("<a onclick='alert('XSS')'>Click Me</a>")).toBe(true);
  });

  it('should not detect non script tags', function() {
    expect(isValidXss("javascript.com")).toBe(false);
    expect(isValidXss("abc.com/javascript/path")).toBe(false);
    expect(isValidXss("abc.com?tag=javascript")).toBe(false);
    expect(isValidXss("only=true")).toBe(false);
    expect(isValidXss("/one/?foo=bar")).toBe(false);
    expect(isValidXss("<safe> tags")).toBe(false);
    expect(isValidXss("<safetag>")).toBe(false);
    expect(isValidXss(">>> safe <<<")).toBe(false);
    expect(isValidXss("<<< safe >>>")).toBe(false);
    expect(isValidXss("my script rules")).toBe(false);
    expect(isValidXss("<a notonlistener='nomatch'>")).toBe(false);
    expect(isValidXss("<h2>MyTitle</h2>")).toBe(false);
    expect(isValidXss("<img src='#'/>")).toBe(false);
  })
});
