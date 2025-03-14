import { Box, Collapse, IconButton } from '@mui/material';
import Switch from './switch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { FC, useState } from 'react';
import { CardTable, CardTableProps } from './card-table';

interface TableSectionProps {
  data: CardTableProps[];
}

export const TableSection: FC<TableSectionProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Switch />
          <IconButton onClick={() => setExpanded(!expanded)}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <Box width="100%">
          <Box position="relative" width="100%">
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
              collapsedSize="100%"
            >
              {data?.map((row) => (
                <Box key={row.month} mb={1} width="100%">
                  <CardTable {...row} />
                </Box>
              ))}
            </Collapse>
            {!expanded && (
              <Box position="relative" width="100%" height="120px">
                {data?.map((row, index) => (
                  <Box
                    key={row.month}
                    position="absolute"
                    top={`${index * 30}px`}
                    left="0"
                    right="0"
                    zIndex={data.length - index}
                    style={{ width: '100%' }}
                  >
                    <CardTable {...row} />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
