import React from 'react';
import classes from './modal.module.css';


const modal = ({handleClose, show, children}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  console.log(classes);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default modal;

