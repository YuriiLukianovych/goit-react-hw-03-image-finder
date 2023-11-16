import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

function Loader() {
  return (
    <>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="var(--yellow)"
        color="var(--accent)"
      />
    </>
  );
}

export default Loader;
