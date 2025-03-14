import { useState, useEffect } from 'react';
import { useTableData } from './use-table-data';
import { useWeekData } from './use-week-data';
import { useYearData } from './use-year-data';
import { Category, Period } from '../entities/enum';

export const useFilterState = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(Period.TODAY);
  const [selectedCategory, setSelectedCategory] = useState(Category.CLIENTS);
  const [showDays, setShowDays] = useState(false);

  useEffect(() => {
    setShowDays(selectedPeriod === Period.SEVEN_DAYS);

    if (selectedPeriod === Period.YTD_YTG) {
      setSelectedCategory(Category.MONEY);
    }
  }, [selectedPeriod]);

  const { data: dayData, isLoading: loadingDay } = useTableData();
  const { data: weekData, isLoading: loadingWeek } = useWeekData();
  const { ytdData, ytgData, isLoading: loadingYear } = useYearData();

  const chartData =
    selectedPeriod === Period.TODAY
      ? dayData
      : selectedPeriod === Period.SEVEN_DAYS
        ? weekData
        : null;

  return {
    selectedPeriod,
    setSelectedPeriod,
    selectedCategory,
    setSelectedCategory,
    showDays,
    chartData,
    ytdData,
    ytgData,
    isLoading: loadingDay || loadingWeek || loadingYear,
  };
};
