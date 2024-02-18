
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';


export const MuiPicker = () => {
    const [value, setValue] = useState<Date | null>(null);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoContainer>
      </LocalizationProvider>
    );
  }