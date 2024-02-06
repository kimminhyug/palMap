import React from 'react';
// import sample from '/public/pals/010.png';
export const Card = (): React.ReactElement => {
  return (
    <>
      <div className="card-container">
        <div className="card-character">
          <img src={'/pals/010.png'}></img>
        </div>
        <div className="card-contents"></div>
      </div>
    </>
  );
};
