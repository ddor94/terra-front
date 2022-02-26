import React from 'react';

export const classnames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
