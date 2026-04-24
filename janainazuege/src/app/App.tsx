import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
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
} from '@mui/material';
import {
  Email,
  Phone,
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
import eventPhoto1 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.00_(1).jpeg';
import eventPhoto2 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.00.jpeg';
import eventPhoto3 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.01_(1).jpeg';
import eventPhoto4 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.01_(2).jpeg';
import eventPhoto5 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.01.jpeg';
import eventPhoto6 from '../imports/WhatsApp_Image_2026-04-23_at_23.35.02.jpeg';

// Tema personalizado com as cores do Permanecerei
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4A574', // Tom madeira natural
      light: '#F5E6D3', // Bege claro
      dark: '#C19A6B',
    },
    secondary: {
      main: '#F4C7C3', // Rosa suave
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

// Dados das fotos dos eventos
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
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Sobre', sectionId: 'sobre' },
    { label: 'Experiência', sectionId: 'experiencia' },
    { label: 'Portfólio', sectionId: 'portfolio' },
    { label: 'Contato', sectionId: 'contato' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <PortfolioHelmet />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* Header/Menu */}
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid', borderColor: 'primary.light' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <ProfileAvatar
                size={50}
                sx={{ mr: 2, border: '2px solid', borderColor: 'primary.main' }}
              />
              <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 400, letterSpacing: '0.1em' }}>
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
          <Box sx={{ width: 250, pt: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <ProfileAvatar size={80} sx={{ margin: '0 auto', mb: 1 }} />
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
            py: { xs: 8, md: 12 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <ProfileAvatar
              size={180}
              sx={{
                margin: '0 auto 2rem',
                border: '4px solid white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
            <Typography variant="h2" gutterBottom sx={{ color: 'text.primary', fontWeight: 300, fontSize: { xs: '2rem', md: '3rem' } }}>
              Janaina Roberta Züege Caetano
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4, fontWeight: 300 }}>
              Especialista em Organização e Decoração de Eventos
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Chip icon={<EmojiEvents />} label="Tecnóloga em Eventos" sx={{ bgcolor: 'white', px: 2, py: 3 }} />
              <Chip icon={<Palette />} label="Branding de Eventos" sx={{ bgcolor: 'white', px: 2, py: 3 }} />
              <Chip icon={<BusinessCenter />} label="Administração" sx={{ bgcolor: 'white', px: 2, py: 3 }} />
            </Box>
          </Container>
        </Box>

        {/* Sobre Section */}
        <Container maxWidth="lg" id="sobre" sx={{ py: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 6, color: 'text.primary', fontWeight: 300 }}>
            Sobre Mim
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 4, bgcolor: 'primary.light', height: '100%' }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 3 }}>
                  Formação Acadêmica
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  <strong>Tecnóloga em Eventos</strong>
                  <br />
                  Laureate International Universities
                  <br />
                  <br />
                  Formação complementar em Administração Empresarial, Secretariado Executivo e Empreendedorismo.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 4, bgcolor: 'secondary.light', height: '100%' }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 3 }}>
                  Especializações
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Palette sx={{ color: 'primary.main' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <strong>Branding</strong> - Criação de identidade visual para eventos
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmojiEvents sx={{ color: 'primary.main' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <strong>Decoração e Paleta de Cores</strong> - Harmonização estética
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <BusinessCenter sx={{ color: 'primary.main' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <strong>Administração para Festas</strong> - Gestão completa
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Experiência Section */}
        <Box sx={{ bgcolor: 'primary.light', py: 8 }} id="experiencia">
          <Container maxWidth="lg">
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 6, color: 'text.primary', fontWeight: 300 }}>
              Experiência Profissional
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Card elevation={3} sx={{ bgcolor: 'white' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 400 }}>
                      PERMANECEREI FESTAS E EVENTOS
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
                      CEO | Janeiro 2020 - Janeiro 2023
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.8, mb: 2 }}>
                      Como CEO da Permanecerei Festas e Eventos, conduzi a criação e execução completa de eventos sociais,
                      transformando sonhos em realidade através de:
                    </Typography>
                    <Box component="ul" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                      <li>
                        <strong>Organização Completa:</strong> Planejamento detalhado desde o conceito até a execução,
                        garantindo que cada detalhe esteja perfeitamente alinhado com a visão do cliente
                      </li>
                      <li>
                        <strong>Decoração Personalizada:</strong> Criação de ambientes únicos com paletas de cores
                        cuidadosamente selecionadas, arranjos florais artesanais e elementos decorativos exclusivos
                      </li>
                      <li>
                        <strong>Branding de Eventos:</strong> Desenvolvimento da identidade visual do evento, incluindo
                        papelaria personalizada, sinalização e elementos que reforçam o tema escolhido
                      </li>
                      <li>
                        <strong>Gestão de Fornecedores:</strong> Seleção e coordenação de fornecedores de confiança,
                        negociação de contratos e supervisão da qualidade dos serviços prestados
                      </li>
                      <li>
                        <strong>Montagem e Execução:</strong> Supervisão presencial da montagem e coordenação do evento,
                        garantindo que tudo ocorra conforme planejado
                      </li>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card elevation={2} sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                      Jeller Móveis e Decorações
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      Auxiliar Administrativa | Ago 2017 - Abr 2018
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      Experiência em gestão administrativa, finanças e atendimento ao cliente no setor de móveis e decoração.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card elevation={2} sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                      Caixa Econômica Federal
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      Estagiária | Nov 2015 - Dez 2016
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      Atendimento ao público, gestão de contratos e documentação, desenvolvendo habilidades em organização e
                      relacionamento com clientes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Portfolio/Galeria Section */}
        <Container maxWidth="lg" id="portfolio" sx={{ py: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 2, color: 'text.primary', fontWeight: 300 }}>
            Portfólio de Eventos
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
            Cada evento é uma história única, criada com dedicação, criatividade e atenção aos detalhes.
            Explore alguns dos projetos que tive o prazer de realizar.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
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
                '&:hover': { bgcolor: 'primary.light' },
              }}
            >
              <ChevronLeft />
            </IconButton>

            <Box sx={{ flex: 1 }}>
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

        {/* Contato Section */}
        <Box sx={{ bgcolor: 'secondary.light', py: 8 }} id="contato">
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 6, color: 'text.primary', fontWeight: 300 }}>
              Entre em Contato
            </Typography>
            <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', mb: 4 }}>
                Vamos criar juntos o evento dos seus sonhos!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Email sx={{ color: 'primary.main' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    janainazuege.hp@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LinkedIn sx={{ color: 'primary.main' }} />
                  <Typography
                    component="a"
                    href="https://www.linkedin.com/in/janainazuege"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main', textDecoration: 'underline' },
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
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 4,
                    py: 1.5,
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
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.92)',
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
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.92)',
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
                    maxHeight: '80vh',
                    display: 'block',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    background: '#F5E6D3',
                  }}
                />
                <Box sx={{ p: 3, bgcolor: 'white' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'text.primary' }}>
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
              bottom: 32,
              right: 32,
              bgcolor: 'primary.main',
              color: 'white',
              width: 56,
              height: 56,
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
