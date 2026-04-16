import { Box, Container, Typography, Button, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { LocalizedProps } from '../i18n';

export default function Hero({ language }: LocalizedProps) {
  const text = {
    pt: {
      role: 'Agile Coach Senior',
      intro:
        'Mais de 11 anos transformando equipes com agilidade, liderança servidora, dados e automação aplicada a resultados reais.',
      contact: 'Entre em contato',
      projects: 'Ver projetos',
      email: 'E-mail',
    },
    en: {
      role: 'Senior Agile Coach',
      intro:
        'Over 11 years of transforming teams through agility, servant leadership, data, and automation applied to real outcomes.',
      contact: 'Get in Touch',
      projects: 'View Projects',
      email: 'Email',
    },
  }[language];

  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg, #120822 0%, #6d2247 48%, #6816c8 100%)',
        color: '#ffffff',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top right, rgba(255, 83, 20, 0.22), transparent 28%), radial-gradient(circle at bottom left, rgba(214, 107, 69, 0.24), transparent 30%)',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.25rem', sm: '2.9rem', md: '4rem' },
                mb: 2,
                color: '#ffffff',
              }}
            >
              Cesar Lima Caetano
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: { xs: '1.3rem', sm: '1.55rem', md: '2rem' },
                color: '#FF5314',
                mb: 3,
              }}
            >
              {text.role}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                mb: 4,
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.86)',
                maxWidth: 720,
              }}
            >
              {text.intro}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FF5314',
                  color: '#ffffff',
                  '&:hover': { backgroundColor: '#d66b45' },
                  textTransform: 'none',
                  fontSize: '1.05rem',
                  px: { xs: 2.5, sm: 4 },
                  py: 1.5,
                  borderRadius: 2,
                }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {text.contact}
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                  textTransform: 'none',
                  fontSize: '1.05rem',
                  px: { xs: 2.5, sm: 4 },
                  py: 1.5,
                  borderRadius: 2,
                }}
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {text.projects}
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
              <Button
                startIcon={<LinkedInIcon />}
                sx={{ color: '#ffffff', textTransform: 'none' }}
                href="https://www.linkedin.com/in/cesarlcaetano/"
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button
                startIcon={<EmailIcon />}
                sx={{ color: '#ffffff', textTransform: 'none' }}
                onClick={() => {
                  window.dispatchEvent(new Event('open-email-dialog'));
                }}
              >
                {text.email}
              </Button>
              <Button
                startIcon={<WhatsAppIcon />}
                sx={{ color: '#ffffff', textTransform: 'none' }}
                href="https://wa.me/5547992047708"
                target="_blank"
              >
                WhatsApp
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
