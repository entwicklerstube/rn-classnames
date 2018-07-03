module.exports = style => {
  const handleArgs = args => {
    const concatedStyles = [];

    args.map(argument => {
      const constructor = argument && argument.constructor;

      if (constructor === String && style[argument]) {
        concatedStyles.push(style[argument]);

      } else if (constructor === Array) {
        concatedStyles.push(...handleArgs(argument));

      } else if (constructor === Object) {
        Object.entries(argument).map(([prop, value]) => {
          if (!!value && style[prop]) {
            concatedStyles.push(style[prop]);
          }
        });
      }
    });

    return concatedStyles;
  }

  return (...args) => handleArgs(args);
}