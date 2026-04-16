import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

type SkillLevel = 'basic' | 'intermediate' | 'advanced';

export function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      category: t('skills.categories.automation'),
      skills: [
        { name: 'Cypress', level: 'intermediate' as SkillLevel },
        { name: 'Playwright', level: 'intermediate' as SkillLevel },
        { name: 'Selenium', level: 'intermediate' as SkillLevel },
      ],
    },
    {
      category: t('skills.categories.languages'),
      skills: [
        { name: 'JavaScript', level: 'basic' as SkillLevel },
        { name: 'Python', level: 'basic' as SkillLevel },
      ],
    },
    {
      category: t('skills.categories.tools'),
      skills: [
        { name: 'Postman', level: 'intermediate' as SkillLevel },
        { name: 'Swagger', level: 'intermediate' as SkillLevel },
        { name: 'Git', level: 'intermediate' as SkillLevel },
      ],
    },
    {
      category: t('skills.categories.methodologies'),
      skills: [
        { name: 'Testes Manuais', level: 'intermediate' as SkillLevel },
        { name: 'Bug Tracking', level: 'intermediate' as SkillLevel },
        { name: 'Agile/Scrum', level: 'basic' as SkillLevel },
      ],
    },
  ];

  const getLevelColor = (level: SkillLevel) => {
    switch (level) {
      case 'basic':
        return '#8892b0';
      case 'intermediate':
        return '#00bcd4';
      case 'advanced':
        return '#ff4081';
      default:
        return '#8892b0';
    }
  };

  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth='xl'>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          {t('skills.title')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(260px, 1fr))',
            },
            alignItems: 'stretch',
          }}
        >
          {skillCategories.map((category) => (
            <Box key={category.category} sx={{ display: 'flex', minWidth: 0 }}>
              <Card sx={{
                backgroundColor: 'background.paper',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minHeight: 340,
                alignItems: 'stretch',
              }}>
                <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      borderBottom: '2px solid',
                      borderColor: 'primary.main',
                      pb: 1,
                      textAlign: 'center',
                      minHeight: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {category.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, justifyContent: 'flex-start' }}>
                    {category.skills.map((skill) => (
                      <Box
                        key={skill.name}
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: 'minmax(0, 1fr) auto',
                          alignItems: 'center',
                          p: 2,
                          gap: 3,
                          borderRadius: 1,
                          backgroundColor: 'rgba(0, 188, 212, 0.05)',
                          minHeight: 76,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 188, 212, 0.1)',
                            transform: 'translateX(4px)',
                          },
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 500,
                            minWidth: 0,
                            lineHeight: 1.4,
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Box
                          sx={{
                            px: 2.5,
                            py: 0.75,
                            borderRadius: 2,
                            backgroundColor: getLevelColor(skill.level),
                            color: '#0a192f',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {t(`skills.levels.${skill.level}`)}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
