import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

class Loader extends React.Component {
  render() {
    return (
      <div
        className="Loader"
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <CircularProgress />
      </div>
    );
  }
}

export default Loader;
