type ClassNames = string | { [key: string]: boolean };

const classNames = (...args: ClassNames[]): string => {
  return args
    .map((arg) => {
      if (typeof arg === 'string') {
        return arg;
      }
      if (typeof arg === 'object') {
        return Object.keys(arg)
          .filter((key) => arg[key]) 
          .join(' ');
      }
      return '';
    })
    .join(' ');
};

export default classNames;
