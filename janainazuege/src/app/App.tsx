import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Chip,
  Paper,
  ThemeProvider,
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import {
  Email,
  WhatsApp,
  LinkedIn,
  Close,
  ChevronLeft,
  ChevronRight,
  EmojiEvents,
  Palette,
  BusinessCenter,
  Menu as MenuIcon,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { ProfileAvatar } from './components/ProfileAvatar';
import { ImageWithFallback } from './components/media/ImageWithFallback';
import { PortfolioHelmet } from './components/PortfolioHelmet';
import { EventPhotoCard } from './components/EventPhotoCard';
import profilePhoto from '../imports/profile.jpg';
import eventPhoto1 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.00_(1).jpeg';
import eventPhoto2 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.00.jpeg';
import eventPhoto3 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.01_(1).jpeg';
import eventPhoto4 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.01_(2).jpeg';
import eventPhoto5 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.01.jpeg';
import eventPhoto6 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.02.jpeg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4A574',
      light: '#F5E6D3',
      dark: '#C19A6B',
    },
    secondary: {
      main: '#F4C7C3',
      light: '#FFE8E6',
    },
    background: {
      default: '#FFFBF7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#5D4E37',
      secondary: '#8B7355',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
  },
});

const eventPhotos = [
  {
    src: eventPhoto1,
    title: 'Decoração de Cerimônia',
    description: 'Arranjo floral com girassóis e rosas em tons pastel',
  },
  {
    src: eventPhoto2,
    title: 'Cruz Decorativa',
    description: 'Composição floral para cerimônia religiosa',
  },
  {
    src: eventPhoto3,
    title: 'Mesa de Convidados',
    description: 'Arranjos florais e detalhes em fibra natural',
  },
  {
    src: eventPhoto4,
    title: 'Placas Personalizadas',
    description: 'Branding e personalização do evento',
  },
  {
    src: eventPhoto5,
    title: 'Mesa de Doces',
    description: 'Composição completa com elementos rústicos e florais',
  },
  {
    src: eventPhoto6,
    title: 'Mesa de Brigadeiros',
    description: 'Decoração de mesa de doces com flores brancas',
  },
];

export default function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('janainazuege.hp@gmail.com');
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      setEmailCopied(false);
    }
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((current) => (current === 0 ? eventPhotos.length - 1 : current - 1));
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((current) => (current === eventPhotos.length - 1 ? 0 : current + 1));
  };

  const goToPreviousModalPhoto = () => {
    setSelectedPhoto((current) => {
      if (current === null) return current;
      return current === 0 ? eventPhotos.length - 1 : current - 1;
    });
  };

  const goToNextModalPhoto = () => {
    setSelectedPhoto((current) => {
      if (current === null) return current;
      return current === eventPhotos.length - 1 ? 0 : current + 1;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 80;
      const sectionTop = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(sectionTop - headerHeight - 16, 0),
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Sobre', sectionId: 'sobre' },
    { label: 'Portfólio', sectionId: 'portfolio' },
    { label: 'Contato', sectionId: 'contato' },
  ];

  const sectionTitleSx = {
    textAlign: 'center',
    mb: { xs: 4.5, md: 6.5 },
    color: 'text.primary',
    fontWeight: 300,
    fontSize: { xs: '1.85rem', sm: '2.35rem', md: '3rem' },
    lineHeight: { xs: 1.18, md: 1.12 },
  };

  return (
    <ThemeProvider theme={theme}>
      <PortfolioHelmet />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* Header/Menu */}
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid', borderColor: 'primary.light' }}>
          <Toolbar sx={{ minHeight: { xs: 72, sm: 80 }, px: { xs: 2, sm: 3 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, flexGrow: 1 }}>
              <ProfileAvatar
                size={isMobile ? 42 : 50}
                src={profilePhoto}
                sx={{ mr: { xs: 1.5, sm: 2 }, border: '2px solid', borderColor: 'primary.main' }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: 'text.primary',
                  fontWeight: 400,
                  letterSpacing: { xs: '0.06em', sm: '0.1em' },
                  fontSize: { xs: '0.95rem', sm: '1.25rem' },
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                JANAINA ZÜEGE
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.sectionId}
                  color="inherit"
                  sx={{ color: 'text.primary' }}
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Mobile Menu Drawer */}
        <Drawer anchor="right" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <Box sx={{ width: { xs: 'min(82vw, 320px)', sm: 280 }, pt: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <ProfileAvatar size={80} src={profilePhoto} sx={{ margin: '0 auto', mb: 1 }} />
              <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                Janaina Züege
              </Typography>
            </Box>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.sectionId} disablePadding>
                  <ListItemButton onClick={() => scrollToSection(item.sectionId)}>
                    <ListItemText
                      primary={item.label}
                      sx={{ '& .MuiTypography-root': { color: 'text.primary' } }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Hero Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #F5E6D3 0%, #FFE8E6 100%)',
            py: { xs: 6, sm: 8, md: 12 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md" sx={{ px: { xs: 2.5, sm: 3 } }}>
            <ProfileAvatar
              size={isMobile ? 140 : 180}
              src={profilePhoto}
              sx={{
                margin: '0 auto 2rem',
                border: { xs: '3px solid white', sm: '4px solid white' },
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
            <Typography variant="h2" gutterBottom sx={{ color: 'text.primary', fontWeight: 300, fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' }, lineHeight: { xs: 1.2, md: 1.15 } }}>
              Janaina Roberta Züege Caetano
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4, fontWeight: 300, fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' }, lineHeight: 1.5 }}>
              Especialista em Organização e Decoração de Eventos
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 820, mx: 'auto' }}>
              <Chip icon={<EmojiEvents />} label="Tecnóloga em Eventos" sx={{ bgcolor: 'white', px: 2, py: 3 }} />
              <Chip icon={<Palette />} label="Branding de Eventos" sx={{ bgcolor: 'white', px: { xs: 1, sm: 2 }, py: { xs: 2.5, sm: 3 }, maxWidth: '100%' }} />
              <Chip icon={<BusinessCenter />} label="Administração" sx={{ bgcolor: 'white', px: 2, py: 3 }} />
            </Box>
          </Container>
        </Box>

        {/* Sobre Section */}
        <Container maxWidth="lg" id="sobre" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2.5, sm: 3 } }}>
          <Typography variant="h3" gutterBottom sx={sectionTitleSx}>
            Sobre Mim
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3.5, sm: 4.5, md: 5.5 },
              bgcolor: '#FAEFE2',
              border: '1px solid',
              borderColor: '#E8C9A6',
              maxWidth: 960,
              mx: 'auto',
              textAlign: 'center',
              borderRadius: { xs: 3, md: 1 },
            }}
          >
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: { xs: '0.98rem', sm: '1rem' } }}>
              Sempre acreditei que um evento vai muito além de uma data marcada: ele pode se tornar uma experiência inesquecível.
              Foi com essa visão que fundei minha própria empresa de festas, onde trabalhei o branding de cada celebração
              para transformá-la em algo único, desde temas autorais até paletas exclusivas e experiências personalizadas
              para cada anfitrião.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mt: 3.5, fontSize: { xs: '0.98rem', sm: '1rem' } }}>
              Minha trajetória reúne experiência em administração, atendimento ao público e criação de projetos criativos.
              Hoje, busco oportunidades nas áreas de eventos, branding e experiências personalizadas, onde eu possa aplicar
              minha criatividade, organização e sensibilidade para tornar cada projeto singular.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mt: 3.5, fontSize: { xs: '0.98rem', sm: '1rem' } }}>
              Acredito que minha formação em Eventos e minha vivência empreendedora me permitem unir planejamento e
              inovação, trazendo sempre um olhar diferenciado para cada desafio.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, mt: 3.5, fontWeight: 500, fontSize: { xs: '0.98rem', sm: '1rem' } }}>
              Coloco-me à disposição para uma conversa online ou presencial.
            </Typography>
          </Paper>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch" justifyContent="center" sx={{ mt: { xs: 3, md: 4 } }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  bgcolor: '#F3DFC1',
                  width: '100%',
                  minHeight: { xs: 'auto', sm: 280, md: 320 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 3.5,
                  borderRadius: { xs: 3, md: 1 },
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 0 }}>
                  Formação Acadêmica
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    display: 'grid',
                    gap: 1,
                    maxWidth: 420,
                    '& strong': {
                      display: 'block',
                      color: 'text.primary',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                    },
                  }}
                >
                  <strong>Tecnóloga em Eventos</strong>
                  <br />
                  Laureate International Universities
                  <br />
                  <br />
                  Formação complementar em Administração Empresarial, Secretariado Executivo e Empreendedorismo.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  bgcolor: '#F7E3E3',
                  width: '100%',
                  minHeight: { xs: 'auto', sm: 280, md: 320 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: { xs: 3, md: 1 },
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 3 }}>
                  Especializações
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, width: '100%', maxWidth: 420 }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'start', columnGap: 1.75 }}>
                    <Palette sx={{ color: 'primary.main', mt: 0.25 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'left' }}>
                      <strong>Branding</strong> - Criação de identidade visual para eventos
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'start', columnGap: 1.75 }}>
                    <EmojiEvents sx={{ color: 'primary.main', mt: 0.25 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'left' }}>
                      <strong>Decoração e Paleta de Cores</strong> - Harmonização estética
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'start', columnGap: 1.75 }}>
                    <BusinessCenter sx={{ color: 'primary.main', mt: 0.25 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, textAlign: 'left' }}>
                      <strong>Administração para Festas</strong> - Gestão completa
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Portfolio/Galeria Section */}
        <Box sx={{ bgcolor: 'primary.light', py: { xs: 6, md: 8 } }} id="portfolio">
          <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3 } }}>
            <Typography variant="h3" gutterBottom sx={{ ...sectionTitleSx, mb: 2 }}>
              Portfólio de Eventos
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, color: 'text.secondary', maxWidth: '800px', mx: 'auto', px: { xs: 1, sm: 0 } }}>
              Cada evento é uma história única, criada com dedicação, criatividade e atenção aos detalhes.
              Explore alguns dos projetos que tive o prazer de realizar.
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, minmax(0, 72px))', sm: 'auto 1fr auto' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 1.25, md: 2 },
              }}
            >
              <IconButton
                aria-label="Foto anterior"
                onClick={goToPreviousPhoto}
                sx={{
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'primary.light',
                  boxShadow: '0 8px 18px rgba(93, 78, 55, 0.08)',
                  justifySelf: { xs: 'center', sm: 'stretch' },
                  order: { xs: 2, sm: 0 },
                  width: { xs: 56, sm: 48 },
                  height: { xs: 56, sm: 48 },
                  '&:hover': { bgcolor: 'primary.light' },
                }}
              >
                <ChevronLeft />
              </IconButton>

              <Box sx={{ minWidth: 0, order: { xs: 1, sm: 0 }, gridColumn: { xs: '1 / -1', sm: 'auto' } }}>
                <EventPhotoCard
                  photo={eventPhotos[currentPhotoIndex]}
                  onClick={() => setSelectedPhoto(currentPhotoIndex)}
                />
              </Box>

              <IconButton
                aria-label="Próxima foto"
                onClick={goToNextPhoto}
                sx={{
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'primary.light',
                  boxShadow: '0 8px 18px rgba(93, 78, 55, 0.08)',
                  justifySelf: { xs: 'center', sm: 'stretch' },
                  order: { xs: 3, sm: 0 },
                  width: { xs: 56, sm: 48 },
                  height: { xs: 56, sm: 48 },
                  '&:hover': { bgcolor: 'primary.light' },
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1.5,
                mt: 3,
                flexWrap: 'wrap',
              }}
            >
              {eventPhotos.map((photo, index) => (
                <Box
                  key={photo.title}
                  component="button"
                  type="button"
                  onClick={() => setCurrentPhotoIndex(index)}
                  aria-label={`Ir para ${photo.title}`}
                  sx={{
                    width: currentPhotoIndex === index ? 36 : 12,
                    height: 12,
                    border: 0,
                    borderRadius: 999,
                    bgcolor: currentPhotoIndex === index ? 'primary.main' : 'secondary.main',
                    opacity: currentPhotoIndex === index ? 1 : 0.5,
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Box>
          </Container>
        </Box>

        {/* Contato Section */}
        <Box sx={{ bgcolor: 'secondary.light', py: { xs: 6, md: 8 } }} id="contato">
          <Container maxWidth="md" sx={{ px: { xs: 2.5, sm: 3 } }}>
            <Typography variant="h3" gutterBottom sx={sectionTitleSx}>
              Entre em Contato
            </Typography>
            <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, textAlign: 'center', borderRadius: { xs: 3, md: 1 } }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 4 }}>
                Vamos criar juntos o evento dos seus sonhos!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Email sx={{ color: 'primary.main' }} />
                  <Typography
                    component="button"
                    type="button"
                    onClick={copyEmailToClipboard}
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      overflowWrap: 'anywhere',
                      textAlign: 'center',
                      bgcolor: 'transparent',
                      border: 0,
                      p: 0,
                      cursor: 'pointer',
                      font: 'inherit',
                      textDecoration: 'underline',
                      textUnderlineOffset: '0.18em',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    janainazuege.hp@gmail.com
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: emailCopied ? 'primary.main' : 'text.secondary',
                    mt: -0.75,
                    minHeight: 14,
                    fontSize: '0.68rem',
                  }}
                >
                  {emailCopied ? 'E-mail copiado para a área de transferência.' : 'Clique no e-mail para copiar.'}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <LinkedIn sx={{ color: 'primary.main' }} />
                  <Typography
                    component="a"
                    href="https://www.linkedin.com/in/janainazuege"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      bgcolor: 'transparent',
                      border: 0,
                      p: 0,
                      cursor: 'pointer',
                      font: 'inherit',
                      textDecoration: 'underline',
                      textUnderlineOffset: '0.18em',
                      transition: 'color 0.2s ease',
                      overflowWrap: 'anywhere',
                      textAlign: 'center',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    linkedin.com/in/janainazuege
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth={isMobile}
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: { xs: 3, sm: 4 },
                    py: 1.5,
                    maxWidth: { xs: '100%', sm: 'fit-content' },
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                  startIcon={<WhatsApp />}
                  href="https://wa.me/5547992244757"
                  target="_blank"
                >
                  Enviar WhatsApp
                </Button>
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: 'text.primary', color: 'white', py: 4, textAlign: 'center' }}>
          <Container maxWidth="lg">
            <Typography variant="body2">
              © 2026 Janaina Züege - Organização e Decoração de Eventos
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              Paranaguamirim, SC
            </Typography>
          </Container>
        </Box>

        {/* Dialog para foto ampliada */}
        <Dialog
          open={selectedPhoto !== null}
          onClose={() => setSelectedPhoto(null)}
          maxWidth="lg"
          fullWidth
          fullScreen={isMobile}
        >
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton
              onClick={() => setSelectedPhoto(null)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                bgcolor: 'white',
                '&:hover': { bgcolor: 'grey.200' },
                zIndex: 1,
              }}
            >
              <Close />
            </IconButton>
            {selectedPhoto !== null && (
              <Box sx={{ position: 'relative' }}>
                <IconButton
                  aria-label="Foto anterior"
                  onClick={goToPreviousModalPhoto}
                  sx={{
                    position: 'absolute',
                    left: { xs: 8, sm: 16 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.92)',
                    width: { xs: 40, sm: 48 },
                    height: { xs: 40, sm: 48 },
                    '&:hover': { bgcolor: 'white' },
                    zIndex: 1,
                  }}
                >
                  <ChevronLeft />
                </IconButton>

                <IconButton
                  aria-label="Próxima foto"
                  onClick={goToNextModalPhoto}
                  sx={{
                    position: 'absolute',
                    right: { xs: 8, sm: 16 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.92)',
                    width: { xs: 40, sm: 48 },
                    height: { xs: 40, sm: 48 },
                    '&:hover': { bgcolor: 'white' },
                    zIndex: 1,
                  }}
                >
                  <ChevronRight />
                </IconButton>

                <ImageWithFallback
                  src={eventPhotos[selectedPhoto].src}
                  alt={eventPhotos[selectedPhoto].title}
                  style={{
                    width: '100%',
                    maxHeight: isMobile ? '60vh' : '80vh',
                    display: 'block',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    background: '#F5E6D3',
                  }}
                />
                <Box sx={{ p: { xs: 2.5, sm: 3 }, bgcolor: 'white' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                    {eventPhotos[selectedPhoto].title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {eventPhotos[selectedPhoto].description}
                  </Typography>
                </Box>
              </Box>
            )}
          </DialogContent>
        </Dialog>

        {/* Botão Voltar ao Topo */}
        {showScrollTop && (
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: { xs: 20, sm: 32 },
              right: { xs: 20, sm: 32 },
              bgcolor: 'primary.main',
              color: 'white',
              width: { xs: 48, sm: 56 },
              height: { xs: 48, sm: 56 },
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-4px)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease',
              zIndex: 1000,
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        )}
      </Box>
    </ThemeProvider>
  );
}
