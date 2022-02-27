import React from 'react';
import { TailSpin } from 'react-loading-icons'

function Loader({ height }) {
  return(
    <div>
      <TailSpin height={height} speed={2} />
    </div>
  )
};

export default Loader;
