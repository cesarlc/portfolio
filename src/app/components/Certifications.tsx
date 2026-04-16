import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import type { LocalizedProps } from '../i18n';

export default function Certifications({ language }: LocalizedProps) {
  const text = {
    pt: {
      title: 'Certificações profissionais',
      subtitle: 'Certificações que validam expertise e compromisso com a excelência',
      quote: '"Investimento contínuo em aprendizado para entregar o melhor aos times e organizações"',
      categories: ['Agile Coaching', 'Agilidade escalada', 'Agilidade escalada', 'Framework Scrum', 'Kanban', 'Práticas ágeis', 'Mindset ágil', 'Análise de dados', 'Estratégia & objetivos'],
    },
    en: {
      title: 'Professional Certifications',
      subtitle: 'Certifications that validate expertise and commitment to excellence',
      quote: '"Continuous investment in learning to deliver the best for teams and organizations"',
      categories: ['Agile Coaching', 'Scaled Agile', 'Scaled Agile', 'Scrum Framework', 'Kanban', 'Agile Practices', 'Agile Mindset', 'Data Analytics', 'Strategy & Goals'],
    },
  }[language];

  const certifications = [
    ['Lean Agile Coach Professional', '#FF5314'],
    ['SAFe 6 Agilist', '#6816c8'],
    ['SAFe Scrum Master', '#6d2247'],
    ['Scrum Overview', '#d66b45'],
    ['Kanban Method in Practice', '#6816c8'],
    ['Agile Retrospective', '#FF5314'],
    ['Professional Agile Wheel', '#6d2247'],
    ['Basic Power BI Course', '#d66b45'],
    ['Objectives & Key Results (OKR)', '#6816c8'],
  ].map(([name, color], index) => ({ name, color, category: text.categories[index] }));

  return (
    <Box id="certifications" sx={{ py: 10, backgroundColor: '#120822' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, color: '#ffffff' }}>{text.title}</Typography>
        <Typography variant="h5" align="center" sx={{ mb: 8, maxWidth: '800px', mx: 'auto', color: 'rgba(255,255,255,0.82)' }}>{text.subtitle}</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 4, alignItems: 'stretch' }}>
          {certifications.map((cert, index) => (
            <Box key={cert.name} sx={{ display: 'flex', ...(index === certifications.length - 1 && certifications.length % 2 === 1 ? { gridColumn: { md: '1 / -1' }, width: { md: 'calc((100% - 32px) / 2)' }, justifySelf: { md: 'center' } } : {}) }}>
              <Card sx={{ height: '100%', width: '100%', minHeight: 112, display: 'flex', alignItems: 'center', backgroundColor: '#ffffff', border: '1px solid rgba(124, 124, 132, 0.2)', borderRadius: 2, boxShadow: '0 20px 50px rgba(18, 8, 34, 0.18)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 26px 58px rgba(18, 8, 34, 0.24)' }, borderTop: `4px solid ${cert.color}` }}>
                <CardContent sx={{ p: 2.5, width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <VerifiedIcon sx={{ color: cert.color, fontSize: 36, flexShrink: 0 }} />
                    <Box sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, lineHeight: 1.35 }}>{cert.name}</Typography>
                      <Typography variant="body1" color="text.secondary">{cert.category}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.82)', fontStyle: 'italic' }}>{text.quote}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
