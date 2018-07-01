import classnames, { typeOf } from './';

const styles = {};

describe('constructor', () => {
  it('is a function', () =>
    expect(classnames).toBeFunction()
  );

  it('returns a function', () => {
    const cn = classnames();

    expect(cn).toBeFunction();
  });
});

describe('typeOf', () => {
  it('string', () =>
    expect(typeOf('hello world')).toEqual('string')
  );
  it('array', () =>
    expect(typeOf([])).toEqual('array')
  );
  it('object', () =>
    expect(typeOf({})).toEqual('object')
  );
  it('number', () =>
    expect(typeOf(1)).toEqual('number')
  );
  it('date', () =>
    expect(typeOf(new Date())).toEqual('date')
  );
});

describe('concator', () => {
  it('returns an array', () => {
    const cn = classnames();

    expect(cn()).toBeArray();
  });

  describe('returns selected styles by', () => {
    const styles = {
      main: {
        backgroundColor: 'red'
      },
      foo: {
        content: 'bar'
      },
      hello: {
        content: 'world'
      }
    };
    it('strings', () => {

      const cn = classnames(styles);

      expect(cn('main')).toEqual([ styles.main ]);
      expect(cn('main', 'foo')).toEqual([ styles.main, styles.foo ]);
    });

    it('array', () => {
      const cn = classnames(styles);

      expect(cn(['main'])).toEqual([ styles.main ]);
      expect(cn(['main', 'foo'], ['hello'])).toEqual([ styles.main, styles.foo, styles.hello ]);
    });

    it('object', () => {
      const cn = classnames(styles);

      expect(cn({ main: true })).toEqual([ styles.main ]);
      expect(cn({ main: true, hello: false }, { foo: true })).toEqual([ styles.main, styles.foo ]);
    });
  });
});
