// @flow
// libs
import React, { memo, useState } from 'react';
import domtoimage from 'dom-to-image';
import fileDownload from 'js-file-download';
import ModalPopup from 'commons/components/Modal';
import Button from 'commons/components/Button';
import moment from 'moment';

type Props = {
  text?: string,
  idWrapElement: string,
};

export const ButtonDownIMG = ({
  text = 'Trend 이미지 다운',
  idWrapElement = 'groupChart',
}: Props) => {
  const nameImage = `graph_${moment(new Date()).format(
    'YYYY_MM_DD_HH_mm_ss'
  )}.png`;
  const [showModalConfirm, setShowModalConfirm] = useState({
    isShow: false,
    content: '',
  });
  const handleDownloadTrend = () => {
    if (window.navigator && window.navigator.msSaveBlob) {
      setShowModalConfirm({
        ...showModalConfirm,
        isShow: true,
        content:
          '이 브라우저는 다운로드를 지원하지 않아 \n 다른 브라우저로 변경해주세요. ',
      });
    } else {
      domtoimage
        .toBlob(document.getElementById(idWrapElement))
        .then(function (blob) {
          fileDownload(blob, nameImage);
        })
        .catch(function (error) {
          setShowModalConfirm({
            ...showModalConfirm,
            isShow: true,
            content: '선택 해주세요 그래프 보기',
          });
          console.error('oops, something went wrong!', error);
        });
    }
  };

  return (
    <>
      <Button onClick={() => handleDownloadTrend()} customClass="mr-2">
        {text}
      </Button>
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

ButtonDownIMG.defaultProps = {
  idWrapElement: 'groupChart',
  text: 'Trend 이미지 다운',
};

export default memo<Props>(ButtonDownIMG);
