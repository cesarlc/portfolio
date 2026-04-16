import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { BugReport, Code, Speed } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <BugReport sx={{ fontSize: 40 }} />,
      title: t('about.highlights.manual.title'),
      description: t('about.highlights.manual.description'),
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: t('about.highlights.automation.title'),
      description: t('about.highlights.automation.description'),
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: t('about.highlights.api.title'),
      description: t('about.highlights.api.description'),
    },
  ];

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          {t('about.title')}
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 560, mx: 'auto', textAlign: 'left' }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
                {t('about.paragraph1')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
                {t('about.paragraph2')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {t('about.paragraph3')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} justifyContent="center">
              {highlights.map((item) => (
                <Grid item xs={12} key={item.title}>
                  <Card sx={{ backgroundColor: 'background.paper', height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', textAlign: 'left' }}>
                        <Box sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
