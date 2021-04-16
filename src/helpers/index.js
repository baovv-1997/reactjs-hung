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

    if (
      item.length === 6 ||
      item.length === 8 ||
      item.length === 9 ||
      item.length === 10 ||
      item.length === 7
    ) {
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
        cloneArray = [...cloneArray, arr[j]];
      }
    }

    if (arr[i].comId !== arr[i - 1]?.comId) {
      newArr.push(cloneArray);
    }
  }
  return newArr;
};

export const avenrageCard = (arr) => {
  const sumCardMeasure = arr.reduce((accumulator, currentValue) => ({
    card: {
      output_current:
        accumulator.card?.output_current + currentValue.card?.output_current,
      output_voltage:
        accumulator.card?.output_voltage + currentValue.card?.output_voltage,
      performance_ratio:
        accumulator.card?.performance_ratio +
        currentValue.card?.performance_ratio,
      prod_inmonth:
        accumulator.card?.prod_inmonth + currentValue.card?.prod_inmonth,
      prod_realtime:
        accumulator.card?.prod_realtime + currentValue.card?.prod_realtime,
      prod_sum: accumulator.card?.prod_sum + currentValue.card?.prod_sum,
      prod_today: accumulator.card?.prod_today + currentValue.card?.prod_today,
      radiance: accumulator.card?.radiance + currentValue.card?.radiance,
      temperature:
        accumulator.card?.temperature + currentValue.card?.temperature,
    },
  }));

  const avenrage = {
    card: {
      output_current: Math.round(
        sumCardMeasure?.card?.output_current / arr.length
      ),
      output_voltage: Math.round(
        sumCardMeasure?.card?.output_voltage / arr.length
      ),
      performance_ratio: Math.round(
        sumCardMeasure?.card?.performance_ratio / arr.length
      ),
      prod_inmonth: Math.round(sumCardMeasure?.card?.prod_inmonth / arr.length),
      prod_realtime: Math.round(
        sumCardMeasure?.card?.prod_realtime / arr.length
      ),
      prod_sum: Math.round(sumCardMeasure?.card?.prod_sum / arr.length),
      prod_today: Math.round(sumCardMeasure?.card?.prod_today / arr.length),
      radiance: Math.round(sumCardMeasure?.card?.radiance / arr.length),
      temperature: Math.round(sumCardMeasure?.card?.temperature / arr.length),
    },
  };
  return avenrage;
};
export const checkIsNumber = (field) => {
  let classTd = '';
  if (
    field === 'rowId' ||
    field === 'dateTime' ||
    field === 'inverterID' ||
    field === 'inverterName' ||
    field === 'rateOfPowerGeneration' ||
    field === 'cumulativePowerGeneration' ||
    field === 'horizontalInsolation' ||
    field === 'dmProddMonth' ||
    field === 'dmProddDay' ||
    field === 'dmProdSum' ||
    field === 'dmPerformanceRatio' ||
    field === 'dmModuleTemp' ||
    field === 'dmEnvTemp' ||
    field === 'dmRad' ||
    field === 'dm_datetime' ||
    field === 'ds_incidence_angle' ||
    field === 'ds_azimuth_angle' ||
    field === 'dm_ac_voltage' ||
    field === 'dm_ac_power' ||
    field === 'dm_ac_current' ||
    field === 'dm_prod_day' ||
    field === 'dm_prod_month' ||
    field === 'dm_prod_sum' ||
    field === 'dm_performance_ratio' ||
    field === 'inverterId' ||
    field === 'dm_rad' ||
    field === 'dm_module_temp' ||
    field === 'performanceRatio' ||
    field === 'insolation'
  ) {
    classTd = 'font-number';
  }
  return classTd;
};

export const fixedPointX = (listCard) => {
  let differenceX = listCard[0]?.position?.pos_map_x;
  let position = 0;

  for (let i = 1; i < listCard.length; i++) {
    differenceX -= listCard[i].position?.pos_map_x;
  }

  if (Math.abs(differenceX) / 2 < 150) {
    position = 150 - Math.abs(differenceX) / 2;
  }

  return position;
};

export const fixedPointY = (listCard) => {
  let differenceY = listCard[0]?.position?.pos_map_y;
  let position = 0;

  for (let i = 1; i < listCard.length; i++) {
    differenceY -= listCard[i].position?.pos_map_y;
  }

  if (Math.abs(differenceY) / 2 < 142) {
    position = 142 - Math.abs(differenceY) / 2;
  }

  return position;
};
