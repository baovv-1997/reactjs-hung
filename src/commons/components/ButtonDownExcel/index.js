// @flow
// libs
import React, { memo, useState } from 'react';
import { ROUTES } from '../../../apis';
import { useSelector } from 'react-redux';
import ModalPopup from 'commons/components/Modal';
import Button from 'commons/components/Button';
// import moment from 'moment';

type Props = {
  text?: string,
  name: string,
};

const API_URI = process.env.REACT_APP_API_URL;

export const ButtonDownExcel = ({
  text = 'Raw Date 다운',
  name = 'event',
}: Props) => {
  const token = useSelector((state) => state?.account?.token);
  // const nameImage = `graph_${moment(new Date()).format(
  //   'YYYY_MM_DD_HH_mm_ss'
  // )}.png`;

  const [showModalConfirm, setShowModalConfirm] = useState({
    isShow: false,
    content: '',
  });
  const handleDownloadRaw = () => {
    fetch(`${API_URI}${ROUTES.API_DOWNLOAD_FILE_EXCEL(name)}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: token,
      }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sampleDownload';
        if (document.body !== null) {
          document.body.appendChild(a);
        }
        a.click();
        a.remove();
      });
  };

  return (
    <>
      <Button onClick={() => handleDownloadRaw()}>{text}</Button>
      <ModalPopup
        isOpen={showModalConfirm.isShow}
        isShowHeader
        title="알림"
        isShowIconClose
        isShowFooter
        handleCloseIcon={() => {
          setShowModalConfirm({
            ...showModalConfirm,
            isShow: false,
            content: '',
          });
        }}
        handleClose={() => {
          setShowModalConfirm({
            ...showModalConfirm,
            isShow: false,
            content: '',
          });
        }}
        textBtnLeft="확인"
        handleSubmit={() => {
          setShowModalConfirm({
            ...showModalConfirm,
            isShow: false,
            content: '',
          });
        }}
      >
        {showModalConfirm.content}
      </ModalPopup>
    </>
  );
};

ButtonDownExcel.defaultProps = {
  name: 'groupChart',
  text: 'Raw Date 다운',
};

export default memo<Props>(ButtonDownExcel);
