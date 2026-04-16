import { Select, MenuItem, Box } from '@mui/material';
import { Language } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Language sx={{ color: 'inherit' }} />
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        sx={{
          color: 'inherit',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.23)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.4)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
          },
          '.MuiSelect-icon': {
            color: 'inherit',
          },
          minWidth: '80px',
          height: '40px',
        }}
      >
        <MenuItem value="pt">PT</MenuItem>
        <MenuItem value="en">EN</MenuItem>
      </Select>
    </Box>
  );
}