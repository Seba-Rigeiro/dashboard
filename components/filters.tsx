import { Box } from '@mui/material';
import { Chip } from './common/chip';
import CheckIcon from '@mui/icons-material/Check';
import { Category, Day, Period } from '../entities/enum';
import { FC } from 'react';

interface FiltersProps {
  selectedPeriod: Period;
  setSelectedPeriod: (period: Period) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  showDays: boolean;
}

export const Filters: FC<FiltersProps> = ({
  selectedPeriod,
  setSelectedPeriod,
  selectedCategory,
  setSelectedCategory,
  showDays,
}) => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box display="flex" gap={1}>
        {Object.values(Period).map((period) => (
          <Chip
            key={period}
            label={period}
            isSelected={selectedPeriod === period}
            onClick={() => setSelectedPeriod(period)}
          />
        ))}
      </Box>
      <Box display="flex" gap={1} mt={1} minHeight="40px">
        {showDays
          ? Object.values(Day).map((day) => (
              <Chip key={day} label={day} onClick={() => {}} />
            ))
          : null}
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1} mt={1}>
        <Box display="flex" gap={0.5}>
          {Object.values(Category)
            .slice(0, 2)
            .map((category) => (
              <Chip
                key={category}
                label={category}
                isSelected={selectedCategory === category}
                startIcon={<CheckIcon />}
                hasBorder
                onClick={() => setSelectedCategory(category)}
              />
            ))}
        </Box>
        <Box display="flex" gap={0.5}>
          {Object.values(Category)
            .slice(2)
            .map((category) => (
              <Chip
                key={category}
                label={category}
                isSelected={selectedCategory === category}
                startIcon={<CheckIcon />}
                hasBorder
                onClick={() => setSelectedCategory(category)}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};
