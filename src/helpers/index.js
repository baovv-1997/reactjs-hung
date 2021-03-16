// eslint-disable-next-line import/prefer-default-export
/* eslint-disable no-plusplus */
export function isNumberKey(e) {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    e.preventDefault();
    return false;
  }
  return true;
}

export function isOnPasteNumber(e) {
  const pastedData = e.clipboardData.getData('text/plain');
  const regex = /[0-9]/;
  if (!regex.test(pastedData)) {
    e.preventDefault();
    return false;
  }
  return true;
}

export const formatValue = (value: any) => {
  let mask = '';
  switch (value?.length) {
    case 10:
      mask = 'XXX-XXX-XXXX';
      break;
    case 11:
      mask = 'XXX-XXXX-XXXX';
      break;
    default:
      mask = 'XXX-XXXXXX-XXXXXX';
      break;
  }
  const s = `${value}`;
  let r = '';
  for (let im = 0, is = 0; im < mask.length && is < s.length; im++) {
    r += mask[im] === 'X' ? s.charAt(is++) : mask.charAt(im);
  }
  return r;
};

export const renderLabelType = (type) => {
  let label = '';
  switch (parseInt(type, 10)) {
    case 0:
      label = '실증단지';
      break;
    case 1:
      label = 'RTU(목업)';
      break;
    case 2:
      label = '테스트(실증단지)';
      break;
    case 3:
      label = '테스트(목업)';
      break;
    default:
      break;
  }
  return label;
};

export const spliceCompanyInverter = (comapyInverter) => {
  let countIndex = 0;

  comapyInverter.map((item, index) => {
    const { id, nameComany, listInverter } = item;

    if (listInverter.length === 4 && countIndex === 1) {
      const newListInverter = listInverter.splice(3);
      comapyInverter.splice(index + 1, 0, {
        id,
        nameComany,
        listInverter: newListInverter,
      });
    }

    if (listInverter.length === 4 && countIndex === 2) {
      const newListInverter = listInverter.splice(2);
      comapyInverter.splice(index + 1, 0, {
        id,
        nameComany,
        listInverter: newListInverter,
      });
    }

    if (listInverter.length === 4 && countIndex === 3) {
      const newListInverter = listInverter.splice(1);
      comapyInverter.splice(index + 1, 0, {
        id,
        nameComany,
        listInverter: newListInverter,
      });
    }

    if (listInverter.length === 3 && countIndex === 2) {
      const newListInverter = listInverter.splice(2);
      console.log(newListInverter, 'newListInverter');
      comapyInverter.splice(index + 1, 0, {
        id,
        nameComany,
        listInverter: newListInverter,
      });
    }

    if (listInverter.length === 3 && countIndex === 3) {
      const newListInverter = listInverter.splice(1);
      comapyInverter.splice(index + 1, 0, {
        id,
        nameComany,
        listInverter: newListInverter,
      });
    }

    if (listInverter.length === 2 && countIndex === 3) {
      const newListInverter = listInverter.splice(1);
      comapyInverter.splice(index + 1, 0, {
        id,
        nameComany,
        listInverter: newListInverter,
      });
    }
    countIndex += listInverter.length;
    return comapyInverter;
  });
};

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
