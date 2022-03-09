import React from 'react';
import { TailSpin } from 'react-loading-icons'

function Loader({ height, isPrimary }) {
  const cPrimary = "rgba(190, 24, 93, 1)";
  const white = "rgba(255, 255, 255, 1)";

  return(
    <div>
      <TailSpin
        height={height}
        speed={2}
        stroke={isPrimary ? cPrimary : white}
      />
    </div>
  )
};

export default Loader;
