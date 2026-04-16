import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  ClickAwayListener
} from '@mui/material';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

export function Header() {
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const isDesktop = useMediaQuery('(min-width:600px)');

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Close menu
  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as Node)
    ) {
      return;
    }

    setOpen(false);
  };

  // Focus back on button when closing
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // Scroll helper
  const scrollToSection = (id: string) => {
    setOpen(false); // fecha menu no mobile
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? 1 : 0,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>

          {/* Logo */}
          {isDesktop ?
            (<Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              JL
            </Typography>) 
            : <LanguageSwitcher />}

          {/* DESKTOP MENU */}

          {isDesktop ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button onClick={() => scrollToSection('about')}>
                {t('header.about')}
              </Button>
              <Button onClick={() => scrollToSection('experience')}>
                {t('header.experience')}
              </Button>
              <Button onClick={() => scrollToSection('skills')}>
                {t('header.skills')}
              </Button>
              <Button onClick={() => scrollToSection('contact')}>
                {t('header.contact')}
              </Button>
              <LanguageSwitcher />
            </Box>
          ) : (
            /* MOBILE MENU */
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }} >
              <Box>
                <IconButton ref={anchorRef} onClick={handleToggle}>
                  <MenuIcon />
                </IconButton>

                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  placement="bottom-end"
                  sx={{
                    zIndex: 1400, // acima do AppBar
                  }}

                >
                  <Paper elevation={5}
                    sx={{
                      bgcolor: '#060e1b',
                      border: '1px solid #233554',
                      boxShadow: 'none',
                    }}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open}>
                        <MenuItem onClick={() => scrollToSection('about')}>
                          {t('header.about')}
                        </MenuItem>
                        <MenuItem onClick={() => scrollToSection('experience')}>
                          {t('header.experience')}
                        </MenuItem>
                        <MenuItem onClick={() => scrollToSection('skills')}>
                          {t('header.skills')}
                        </MenuItem>
                        <MenuItem onClick={() => scrollToSection('contact')}>
                          {t('header.contact')}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Popper>
              </Box>
            </Toolbar>
          )}

        </Toolbar>
      </Container>
    </AppBar>
  );
}