import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledButton = styled(Button)`
  border-radius: 100px;
  text-transform: capitalize;
`;

export const Navbar = () => {
  return (
    <AppBar color="transparent">
      <Toolbar
        style={{ justifyContent: 'space-between', backgroundColor: '#fff' }}
      >
        <Box display="flex" justifyContent="center" flexGrow={1} gap={2}>
          <StyledButton variant="contained">Dashboard</StyledButton>
          <StyledButton variant="text">Clientes</StyledButton>
          <StyledButton variant="text">Reglas de acumulacion</StyledButton>
        </Box>
        <Box display="flex" alignItems="center" ml="auto">
          <Typography>Usuario</Typography>
          <IconButton>
            <ExpandMoreIcon color="inherit" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
