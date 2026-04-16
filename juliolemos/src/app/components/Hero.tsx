import { Container, Typography, Box, Button } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1582224369048-e4d2d7a6ba30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlJTIwcXVhbGl0eSUyMGFzc3VyYW5jZXxlbnwxfHx8fDE3NzYyMDI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Typography 
            variant="h6" 
            sx={{ color: 'primary.main', mb: 2, fontFamily: 'monospace' }}
          >
            {t('hero.greeting')}
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '3rem', md: '5rem' },
              mb: 2,
              color: 'text.primary',
            }}
          >
            {t('hero.name')}
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '3.5rem' },
              mb: 3,
              color: 'text.secondary',
            }}
          >
            {t('hero.title')}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.2rem',
              mb: 4,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {t('hero.description')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/lemos-julio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('hero.github')}
            </Button>
            <Button 
              variant="contained" 
              size="large"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/lemos-julio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('hero.linkedin')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
