import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '800px', marginTop: '2rem', paddingTop: '1rem' }}>
      {props.children}
    </div>
  );
};

export default Scroll;