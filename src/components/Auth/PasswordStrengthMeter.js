import React, { useState } from 'react';

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

  const color = () => {
    switch (passwordStrength.score) {
      case 0:
        return "red";
      case 1:
        return "red";
      case 2:
        return "yellow";
      case 3:
        return "sky";
      case 4:
        return "emerald";
      default:
        return "red";
    }
  };

  return (
    <div className="mx-2">
      <div className="bg-gray-200 rounded-full h-3 dark:bg-gray-700">
        <div className={`transition-all duration-400 h-3 rounded-full ${percentage()} bg-${color()}-500`}></div>
      </div>
      <small className="block mt-2 font-medium text-gray-500">
        Força da senha: <span className={`text-${color()}-500`}>{label()}</span>
      </small>
    </div>
  );
}

export default PasswordStrengthMeter;
