import classnames from './index';

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

const cn = classnames(styles);

describe('constructor', () => {
  it('is a function', () =>
    expect(classnames).toBeFunction()
  );

  it('returns a function', () => {
    expect(cn).toBeFunction();
  });
});

describe('concator', () => {
  it('returns an array', () => {
    expect(cn()).toBeArray();
  });

  describe('returns selected styles by', () => {
    it('strings', () => {
      expect(cn('main')).toEqual([ styles.main ]);
      expect(cn('main', 'foo')).toEqual([ styles.main, styles.foo ]);
    });

    it('array', () => {
      expect(cn(['main'])).toEqual([ styles.main ]);
      expect(cn(['main'])).toEqual([ styles.main ]);
      expect(cn(['main', ['foo'], [[[{ hello: true }]]]])).toEqual([ styles.main, styles.foo, styles.hello ]);
    });

    it('object', () => {
      expect(cn({ main: true })).toEqual([ styles.main ]);
      expect(cn({ main: true, hello: false }, { foo: true })).toEqual([ styles.main, styles.foo ]);
    });
    
    it('combination of strings, array and object', () => {
      expect(cn('main', { foo: true }, ['hello'])).toEqual([ styles.main, styles.foo, styles.hello ]);
    });
  });
  
  describe('edge cases', () => {
    it('supports computed keys', () => {
      const ai = 'ai';
      expect(cn(`m${ai}n`)).toEqual([ styles.main ]);
      expect(cn({ [`m${ai}n`]: true })).toEqual([ styles.main ]);
      expect(cn([`m${ai}n`])).toEqual([ styles.main ]);
    })

    it('ignores not available styles', () => {
      expect(cn('main', ['ok'], { this: true, vars: false }, ['should', 'not', 'appear'], 'in the styles')).toEqual([ styles.main ]);
    })

    it('handles nested arrays', () => {
      expect(cn(['this', ['is', 'a', ['nested'], ['list:', ['main']]]])).toEqual([ styles.main ]);
    })
  });
});
