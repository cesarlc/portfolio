import { Box, Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import flagBr from '../../../../src/assets/icons/flag-br.svg';
import flagUs from '../../../../src/assets/icons/flag-us.svg';

const languageOptions = [
  { value: 'pt', label: 'Português', flag: flagBr, flagAlt: 'Bandeira do Brasil' },
  { value: 'en', label: 'English', flag: flagUs, flagAlt: 'Bandeira dos Estados Unidos' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLanguage =
    languageOptions.find((option) => option.value === i18n.language) ?? languageOptions[0];

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const selectLanguage = (language: string) => {
    i18n.changeLanguage(language);
    closeMenu();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        aria-label="Selecionar idioma"
        aria-controls={anchorEl ? 'julio-language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={openMenu}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          minWidth: 70,
          height: 40,
          px: 1.25,
          color: 'inherit',
          border: '1px solid rgba(255, 255, 255, 0.23)',
          borderRadius: 2,
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.4)',
            backgroundColor: 'rgba(100, 255, 218, 0.08)',
          },
          '.MuiButton-endIcon': {
            ml: 0.5,
          },
        }}
      >
        <Box
          component="img"
          src={currentLanguage.flag}
          alt={currentLanguage.flagAlt}
          sx={{
            width: 26,
            height: 18,
            borderRadius: '2px',
            objectFit: 'cover',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.35)',
          }}
        />
      </Button>

      <Menu
        id="julio-language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 170,
            bgcolor: '#060e1b',
            color: '#ffffff',
            border: '1px solid #233554',
            borderRadius: 2,
          },
        }}
      >
        {languageOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === i18n.language}
            onClick={() => selectLanguage(option.value)}
            sx={{
              gap: 1.25,
              '&.Mui-selected': {
                backgroundColor: 'rgba(100, 255, 218, 0.14)',
              },
              '&.Mui-selected:hover, &:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.22)',
              },
            }}
          >
            <Box
              component="img"
              src={option.flag}
              alt={option.flagAlt}
              sx={{
                width: 26,
                height: 18,
                borderRadius: '2px',
                objectFit: 'cover',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.24)',
              }}
            />
            <Box component="span">{option.label}</Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
