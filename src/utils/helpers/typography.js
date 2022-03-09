export const capitalize = ([first, ...rest], lowerRest = false) => {
  return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
};
