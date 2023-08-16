export const formatNumber = (number: string | number, options = {}) => {
  const numberToFormat = +number;

  if (isNaN(numberToFormat)) {
    return 0;
  }

  return new Intl.NumberFormat("ru-RU", options).format(numberToFormat);
};
