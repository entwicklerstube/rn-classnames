export function typeOf(object) {
  return toString.call(object).slice(8, -1).toLowerCase();
}

export function handleArguments(style, args) {
  let concatedStyles = [];

  args.forEach(argument => {
    switch (typeOf(argument)) {
      case 'string':
        if (style[argument]) {
          concatedStyles.push(style[argument]);
        }
        break;
      case 'array':
        concatedStyles.push(...handleArguments(style, argument))
        break;
      case 'object':
        Object
          .entries(argument)
          .forEach(([prop, value]) => {
            if (!!value && style[prop]) {
              concatedStyles.push(style[prop]);
            }
          })
        break;
    }
  });

  return concatedStyles;
}

export default function RnClassnames(style = {}) {
  return function concator(...args) {
    return handleArguments(style, args);
  };
}