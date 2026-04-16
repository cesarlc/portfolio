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
} from '@mui/material';
import { useEffect, useState, type MouseEvent } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Certifications from './Certifications';
import Tools from './Tools';
import Projects from './Projects';
import Contact from './Contact';
import type { Language } from '../i18n';

const languageStorageKey = 'portfolio-language';

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
                onClick={() => setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))}
                sx={{
                  textTransform: 'none',
                  fontSize: '1rem',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.35)',
                  minWidth: 64,
                  px: 1.5,
                }}
              >
                {language === 'pt' ? 'EN' : 'PT'}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

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
            onClick={() => setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))}
            sx={{
              mt: 1,
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.24)',
            }}
          >
            <ListItemText primary={`${text.languageLabel}: ${language === 'pt' ? 'English' : 'Português'}`} />
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
