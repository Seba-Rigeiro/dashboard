import { ToggleButtonGroup, ToggleButton, styled } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  borderRadius: '50px',
  border: `2px solid ${theme.palette.primary.main}`,
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
}));

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: '50px !important',
  textTransform: 'none',
  padding: '8px 16px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));

export default function Switch() {
  const [selected, setSelected] = useState('grafico');

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) setSelected(newValue);
  };

  return (
    <CustomToggleButtonGroup value={selected} exclusive onChange={handleChange}>
      <CustomToggleButton value="grafico">
        <BarChartIcon />
        Gráfico
      </CustomToggleButton>
      <CustomToggleButton value="pulso">
        <StarIcon />
        Pulso
      </CustomToggleButton>
    </CustomToggleButtonGroup>
  );
}
