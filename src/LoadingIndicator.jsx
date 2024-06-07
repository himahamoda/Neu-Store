import React from 'react';

function LoadingIndicator() {
    return (
      <div className="loading-indicator">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    );
  }
  
  export default LoadingIndicator;