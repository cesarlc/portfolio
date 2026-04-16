import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { useEffect, useState, type MouseEvent } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Certifications from './Certifications';
import Tools from './Tools';
import Projects from './Projects';
import Contact from './Contact';
import type { Language } from '../i18n';
import flagBr from '../../assets/icons/flag-br.svg';
import flagUs from '../../assets/icons/flag-us.svg';

const languageStorageKey = 'portfolio-language';

const languageOptions: Array<{ value: Language; label: string; flag: string; flagAlt: string }> = [
  { value: 'pt', label: 'Português', flag: flagBr, flagAlt: 'Bandeira do Brasil' },
  { value: 'en', label: 'English', flag: flagUs, flagAlt: 'Bandeira dos Estados Unidos' },
];

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'pt';
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  return savedLanguage === 'en' || savedLanguage === 'pt' ? savedLanguage : 'pt';
}

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getScrollTop = () =>
      window.scrollY ||
      document.scrollingElement?.scrollTop ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const handleScroll = () => {
      setVisible(getScrollTop() > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const scrollOptions: ScrollToOptions = { top: 0, left: 0, behavior: 'smooth' };
    const scrollTargets = [
      document.scrollingElement,
      document.documentElement,
      document.body,
      document.getElementById('root'),
    ].filter(Boolean) as HTMLElement[];

    window.scrollTo(scrollOptions);
    scrollTargets.forEach((target) => {
      target.scrollTo(scrollOptions);
      target.scrollTop = 0;
    });

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      scrollTargets.forEach((target) => {
        target.scrollTop = 0;
      });
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 14, sm: 16 },
        bottom: { xs: 14, sm: 16 },
        zIndex: 2000,
        display: 'flex',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}
    >
      <Fab
        size="medium"
        aria-label="scroll back to top"
        onClick={handleClick}
        sx={{
          backgroundColor: '#FF5314',
          color: '#ffffff',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.34)',
          '&:hover': { backgroundColor: '#d66b45' },
          width: { xs: 46, sm: 48 },
          height: { xs: 46, sm: 48 },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const text = {
    pt: {
      about: 'Sobre',
      skills: 'Competências',
      certifications: 'Certificações',
      projects: 'Projetos',
      contact: 'Contato',
      languageLabel: 'Idioma',
    },
    en: {
      about: 'About',
      skills: 'Skills',
      certifications: 'Certifications',
      projects: 'Projects',
      contact: 'Contact',
      languageLabel: 'Language',
    },
  }[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'about', label: text.about },
    { id: 'skills', label: text.skills },
    { id: 'certifications', label: text.certifications },
    { id: 'projects', label: text.projects },
    { id: 'lets-talk', label: text.contact },
  ];
  const currentLanguage = languageOptions.find((option) => option.value === language) ?? languageOptions[0];

  const openLanguageMenu = (event: MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const closeLanguageMenu = () => {
    setLanguageMenuAnchor(null);
  };

  const selectLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    closeLanguageMenu();
  };

  return (
    <Box sx={{ backgroundColor: '#120822', overflowX: 'hidden' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(18, 8, 34, 0.9)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              py: 1,
              px: { xs: 0, sm: 2 },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.5rem' },
                textAlign: 'left',
              }}
            >
              Cesar Lima Caetano
            </Typography>
            <IconButton
              aria-label="Abrir menu"
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: '#ffffff',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                justifyContent: 'center',
                width: 'auto',
              }}
            >
              {navigationItems.slice(0, 4).map((item) => (
                <Button key={item.id} onClick={() => scrollToSection(item.id)} sx={{ textTransform: 'none', fontSize: '1rem', color: '#ffffff', minWidth: 'auto', px: 1.5 }}>
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection('lets-talk')}
                variant="contained"
                sx={{
                  textTransform: 'none',
                  fontSize: '1rem',
                  backgroundColor: '#FF5314',
                  color: '#ffffff',
                  '&:hover': { backgroundColor: '#d66b45' },
                  minWidth: 'auto',
                  px: 2,
                }}
              >
                {text.contact}
              </Button>
              <Button
                aria-label={text.languageLabel}
                aria-controls={languageMenuAnchor ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={languageMenuAnchor ? 'true' : undefined}
                onClick={openLanguageMenu}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  textTransform: 'none',
                  fontSize: '1rem',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.35)',
                  minWidth: 70,
                  px: 1.25,
                  gap: 0.5,
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        id="language-menu"
        anchorEl={languageMenuAnchor}
        open={Boolean(languageMenuAnchor)}
        onClose={closeLanguageMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 170,
            backgroundColor: '#1d1031',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 2,
          },
        }}
      >
        {languageOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === language}
            onClick={() => selectLanguage(option.value)}
            sx={{
              gap: 1.25,
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 83, 20, 0.18)',
              },
              '&.Mui-selected:hover, &:hover': {
                backgroundColor: 'rgba(255, 83, 20, 0.28)',
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

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 'min(82vw, 320px)',
            backgroundColor: '#120822',
            color: '#ffffff',
            borderLeft: '1px solid rgba(255,255,255,0.12)',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Menu
          </Typography>
          <IconButton aria-label="Fechar menu" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {navigationItems.map((item) => (
            <ListItemButton key={item.id} onClick={() => scrollToSection(item.id)} sx={{ borderRadius: 2 }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
          <ListItemButton
            onClick={openLanguageMenu}
            sx={{
              mt: 1,
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.24)',
            }}
          >
            <ListItemText
              primary={
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    component="img"
                    src={currentLanguage.flag}
                    alt={currentLanguage.flagAlt}
                    sx={{
                      width: 26,
                      height: 18,
                      borderRadius: '2px',
                      objectFit: 'cover',
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.24)',
                    }}
                  />
                  {`${text.languageLabel}: ${currentLanguage.label}`}
                </Box>
              }
            />
            <KeyboardArrowDownIcon fontSize="small" />
          </ListItemButton>
        </List>
      </Drawer>

      <Box sx={{ pt: { xs: 8, sm: 8, md: 9 } }}>
        <Hero language={language} />
      </Box>
      <About language={language} />
      <Skills language={language} />
      <Certifications language={language} />
      <Tools language={language} />
      <Projects language={language} />
      <ScrollTop />
      <Contact language={language} />
    </Box>
  );
}
