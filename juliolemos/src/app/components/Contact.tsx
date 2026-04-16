import { Container, Typography, Box, Button, Card, CardContent } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: <LinkedIn sx={{ fontSize: 48 }} />,
      title: t('contact.linkedin.title'),
      description: t('contact.linkedin.description'),
      link: 'https://www.linkedin.com/in/lemos-julio',
      buttonText: t('contact.linkedin.button'),
    },
    {
      icon: <GitHub sx={{ fontSize: 48 }} />,
      title: t('contact.github.title'),
      description: t('contact.github.description'),
      link: 'https://github.com/lemos-julio',
      buttonText: t('contact.github.button'),
    },
  ];

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 3, 
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          {t('contact.title')}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          {t('contact.description')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, minmax(320px, 1fr))',
            },
            alignItems: 'stretch',
          }}
        >
          {contactMethods.map((method) => (
            <Box key={method.link} sx={{ display: 'flex', minWidth: 0 }}>
              <Card 
                sx={{ 
                  backgroundColor: 'background.default',
                  width: '100%',
                  height: '100%',
                  minHeight: 320,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ color: 'primary.main', mb: 2, minHeight: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {method.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', minHeight: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {method.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {method.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{ mt: 'auto' }}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
