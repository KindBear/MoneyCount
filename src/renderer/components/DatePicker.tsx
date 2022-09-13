import * as React from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  DateRangePicker,
  DateRange,
} from '@mui/x-date-pickers-pro/DateRangePicker';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
  console.log('value', value);

  return (
    <LocalizationProvider
      localeText={{ start: 'Month to date' }}
      dateAdapter={AdapterDayjs}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(startProps: any, endProps: any) => {
          console.log('startProps', startProps);
          console.log('endProps', endProps);
          return (
            <div onClick={startProps.inputProps.onClick}>
              <p>
                {startProps.inputProps.value} - {endProps.inputProps.value}
              </p>
            </div>
          );
        }}
      />
    </LocalizationProvider>
  );
}
