import React from 'react';

const Clothes = (props) => {
    console.log(props);
  const{title}=props.title
    return (
        <div>
          <h3>{title}</h3>
        </div>
    );
};

export default Clothes;