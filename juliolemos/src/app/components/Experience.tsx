import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { BusinessCenter } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('experience.bmp.company'),
      period: t('experience.current'),
      role: t('experience.bmp.role'),
      description: t('experience.bmp.description'),
      achievements: t('experience.bmp.achievements', { returnObjects: true }) as string[],
      technologies: ['Postman', 'Swagger', 'Network Analysis', 'Manual Testing', 'API Testing'],
    },
    {
      company: t('experience.sheetgo.company'),
      period: t('experience.previous'),
      role: t('experience.sheetgo.role'),
      description: t('experience.sheetgo.description'),
      achievements: t('experience.sheetgo.achievements', { returnObjects: true }) as string[],
      technologies: ['Playwright', 'Cypress', 'Selenium', 'JavaScript', 'Python'],
    },
  ];

  return (
    <Box id="experience" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          {t('experience.title')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experiences.map((exp) => (
            <Card key={exp.company} sx={{ backgroundColor: 'background.default' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                  <BusinessCenter sx={{ color: 'primary.main', fontSize: 32, mt: 0.5 }} />
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 1 }}>
                      <Typography variant="h5" sx={{ color: 'text.primary' }}>
                        {exp.company}
                      </Typography>
                      <Chip label={exp.period} color="primary" />
                    </Box>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 2 }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                      {exp.description}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.primary', mb: 1.5 }}>
                      {t('experience.achievements')}
                    </Typography>
                    <Box component="ul" sx={{ color: 'text.secondary', pl: 2, mb: 3 }}>
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} style={{ marginBottom: '0.5rem' }}>
                          <Typography variant="body2">{achievement}</Typography>
                        </li>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.technologies.map((tech) => (
                        <Chip 
                          key={tech} 
                          label={tech} 
                          size="small" 
                          variant="outlined"
                          sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
