import React from 'react';
import { TailSpin } from 'react-loading-icons'

function Loader({ height }) {
  const cPrimary = "rgba(190, 24, 93, 1)";

  return(
    <div>
      <TailSpin height={height} speed={2} stroke={cPrimary} />
    </div>
  )
};

export default Loader;
