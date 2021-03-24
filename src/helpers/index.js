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

    let newListInverter;

    if (item.length === 6 || item.length === 8 || item.length === 9 || item.length === 10 || item.length === 7) {
      switch (countIndex) {
        case 0:
          newListInverter = item.splice(5);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 1:
          newListInverter = item.splice(4);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 2:
          newListInverter = item.splice(3);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 3:
          newListInverter = item.splice(2);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 4:
          newListInverter = item.splice(1);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        default:
          break;
      }
    }

    if (item.length === 5) {
      switch (countIndex) {
        case 1:
          newListInverter = item.splice(4);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 2:
          newListInverter = item.splice(3);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 3:
          newListInverter = item.splice(2);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 4:
          newListInverter = item.splice(1);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        default:
          break;
      }
    }

    if (item.length === 4) {
      switch (countIndex) {
        case 2:
          newListInverter = item.splice(3);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 3:
          newListInverter = item.splice(2);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 4:
          newListInverter = item.splice(1);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        default:
          break;
      }
    }

    if (item.length === 3) {
      switch (countIndex) {
        case 3:
          newListInverter = item.splice(2);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        case 4:
          newListInverter = item.splice(1);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        default:
          break;
      }
    }

    if (item.length === 2) {
      switch (countIndex) {
        case 4:
          newListInverter = item.splice(1);
          comapyInverter.splice(index + 1, 0, newListInverter);
          break;
        default:
          break;
      }
    }

    countIndex += item.length;
    return comapyInverter;
  });
};

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const handleGroupItem = (arr, newArr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let cloneArray = [arr[i]];
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i].comId === arr[j]?.comId) {
        cloneArray = [...cloneArray, arr[j]]
      }
    }

    if (arr[i].comId !== arr[i - 1]?.comId) {
      newArr.push(cloneArray);
    }
  }
  return newArr;
}