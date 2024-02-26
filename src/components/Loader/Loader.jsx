import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div
      className="Loader"
      style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loader;
