import React, { useState } from 'react';
import { classnames } from '../../utils/helpers/classnames';

function PasswordStrengthMeter({ passwordStrength }) {
  const label = () => {
    switch (passwordStrength.score) {
      case 0:
        return "Fraco";
      case 1:
        return "Fraco";
      case 2:
        return "Médio";
      case 3:
        return "Bom";
      case 4:
        return "Forte";
      default:
        return "Fraco";
    }
  };

  const percentage = () => {
    switch (passwordStrength.score) {
      case 0:
        return "w-0";
      case 1:
        return "w-1/4";
      case 2:
        return "w-2/4";
      case 3:
        return "w-3/4";
      case 4:
        return "w-full";
      default:
        return "w-0";
    }
  };

  return (
    <div className="mx-2">
      <div className="bg-gray-200 rounded-full h-3 dark:bg-gray-700">
        <div className={`transition-all duration-400 h-3 rounded-full ${percentage()} bg-pink-700`}></div>
      </div>
      <small className="block mt-2 font-medium text-gray-500">
        Força da senha: <span className={classnames(
          passwordStrength.score == 0 || passwordStrength.score == 1 ?
          'text-red-600' :
          passwordStrength.score == 2 ?
          'text-amber-600' :
          passwordStrength.score == 3 ?
          'text-sky-600' :
          passwordStrength.score == 4 ?
          'text-emerald-600' :
          'text-gray-900'
        )}>{label()}</span>
      </small>
    </div>
  );
}

export default PasswordStrengthMeter;
