import React, {useEffect} from 'react';
import classes from './modal.module.css';

const Modal = ({handleClose, show, children}) => {
  const modalDivClassName=[classes.modal];
  console.log(classes);
  console.log(show);
  const skata=show?classes.displayBlock:classes.displayNone;
  console.log(skata);
  modalDivClassName.push(skata);

  useEffect(() => {
    show? document.body.style.overflow = 'hidden':
		document.body.style.overflow = 'unset';
  }, [show]);


  return (
    <div className={modalDivClassName.join(' ')}>
      <section className={classes.modalMain}>
        {children}
        <button className={classes.close} onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
