import { Chip as MuiChip, ChipProps, styled } from '@mui/material';
import { theme } from '../../pages/_app';
import { FC, ReactElement } from 'react';

interface StyledChipProps extends ChipProps {
  isSelected?: boolean;
  hasBorder?: boolean;
  startIcon?: ReactElement;
}

const StyledChip = styled(MuiChip)<StyledChipProps>(
  ({ isSelected, hasBorder }) => ({
    backgroundColor: isSelected ? theme.palette.secondary.main : 'transparent',
    borderRadius: '8px',
    border: hasBorder ? `1px solid ${theme.palette.secondary.main}` : 'none',
    padding: '4px 8px',
    fontWeight: 500,
    transition: 'background-color 0.3s ease, color 0.3s ease',

    '&:hover': {
      backgroundColor: isSelected
        ? theme.palette.secondary.main
        : theme.palette.secondary.light,
    },
    '&:focus': {
      backgroundColor: isSelected
        ? theme.palette.secondary.main
        : theme.palette.secondary.light,
    },

    '& .MuiChip-icon': {
      marginLeft: '4px',
    },
  })
);

export const Chip: FC<StyledChipProps> = ({
  isSelected,
  hasBorder,
  startIcon,
  ...props
}) => {
  return (
    <StyledChip
      icon={isSelected && startIcon ? startIcon : undefined}
      isSelected={isSelected}
      hasBorder={hasBorder}
      {...props}
    />
  );
};
