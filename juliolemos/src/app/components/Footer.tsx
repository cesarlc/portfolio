import { Box, Container, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        backgroundColor: 'background.default',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              href="https://github.com/lemos-julio"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <GitHub />
            </IconButton>
            <IconButton 
              href="https://www.linkedin.com/in/lemos-julio"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            {t('footer.copyright')}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            {t('footer.developed')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}