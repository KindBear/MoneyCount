import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  DateRangePicker,
  DateRange,
} from '@mui/x-date-pickers-pro/DateRangePicker';
import { SxProps } from '@mui/material';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
  console.log('value', value);

  const popperSx: SxProps = {
    //основной блок
    '& .MuiPaper-root': {
      borderRadius: '5px',
      boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.5)',
      backgroundImage:
        'linear-gradient(to bottom, #446f7f, #446f7f), linear-gradient(to top, #000000, rgba(0, 0, 0, 0))',
      position: 'absolute',
      zIndex: '1',
    },

    // линия(блок) месяца
    '& .MuiPickersArrowSwitcher-root': {
      fontFamily: 'Asap',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#ffffff',
      marginTop: '21px',
      marginBottom: '6px',
    },
    // текст месяца
    '& .MuiTypography-root': {
      fontSize: '12px',
      fontWeight: 'bold',
    },

    // кнопки возле месяца
    '& .MuiPickersArrowSwitcher-button': {
      width: '16px',
      height: '16px',
      backgroundColor: 'rgba(30, 61, 74, 0.25)',
      borderRadius: '50%',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      color: 'rgb(255, 255, 255)',
      textAlign: 'center',
      cursor: 'pointer',
      padding: '0px',
    },
    //фон дня старта
    '& .css-1h1xps2-MuiDateRangePickerDay-root': {
      backgroundColor: 'rgba(30, 61, 74, 0.3)',
    },
    //фон дня финиша
    '& .css-1m0lxk5-MuiDateRangePickerDay-root': {
      backgroundColor: 'rgba(30, 61, 74, 0.3)',
    },

    //фон выделенного периода внутри дня старта и финиша
    '& .css-39xn1h-MuiDateRangePickerDay-root': {
      backgroundColor: 'rgba(30, 61, 74, 0.3)',
    },

    //меню месяца ???
    '& .css-i6bazn': {
      display: 'table-cell',
      padding: '0.5em',
      //   borderRadius: '50%',
      verticalAlign: 'middle',
      textAlign: 'center',
      cursor: 'pointer',
    },
    //дни месяца
    '& .MuiButtonBase-root': {
      width: '24px',
      height: '24px',
      padding: '0',
      fontSize: '12px',
      color: '#ffffff',
      lineHeight: '24px',
      fontWeight: 'normal',
    },

    //наведение на кнопку
    '& .MuiButtonBase-root:hover': {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#00dd9a',
      margin: '0 auto',
      border: '0px',
    },
    //стили , когда кнопка нажата
    '& .css-v2qwfj-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected':
      {
        backgroundImage: 'linear-gradient(to bottom, #00ED9A, #00BE7C)',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.25)',
      },

    // Дни недели (каждый день отдельно)
    '& .MuiTypography-caption': {
      width: '30px',
      height: '14px',
      opacity: '0.8',
      fontFamily: 'Asap',
      fontSize: '12px',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#1e3d4a',
      display: 'table-cell',
      padding: '0',
      paddingBottom: '10px',
    },

    // отмена смены цвета при выборе 1 дня месяца
    '& .css-1pxbez2-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day:focus.Mui-selected':
      {
        willChange: 'background-color',
        backgroundColor: '#00ED9A',
      },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        PopperProps={{
          sx: popperSx,
        }}
        renderInput={(startProps: any, endProps: any) => {
          return (
            <div onClick={startProps.inputProps.onClick}>
              <div>PERIOD</div>
              <div>
                {startProps.inputProps.value} - {endProps.inputProps.value}
              </div>
            </div>
          );
        }}
      />
    </LocalizationProvider>
  );
}
