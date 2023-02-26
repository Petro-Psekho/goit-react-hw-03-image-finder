import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export const Modalka = ({ largeImage, largeImageDel }) => {
  const [open, setOpen] = useState(true);

  // const onOpenModal = () => {
  //   if (largeImage) {
  //     setOpen(true);
  //   }
  // };

  const onCloseModal = () => {
    if (largeImage) {
      largeImageDel();
    }

    setOpen(false);
  };

  return (
    <div>
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        animationDuration={200}
      >
        <img src={largeImage} alt="" />
      </Modal>
    </div>
  );
};
