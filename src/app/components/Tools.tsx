import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import type { LocalizedProps } from '../i18n';

export default function Tools({ language }: LocalizedProps) {
  const text = {
    pt: {
      title: 'Ferramentas & Tecnologias',
      subtitle: 'Stack tecnológico para decisões baseadas em dados e automações inteligentes',
      metricsTitle: 'Métricas ágeis que domino',
      metricsIntro: 'Utilizo métricas ágeis para gerar insights acionáveis e orientar times na melhoria contínua e na previsibilidade das entregas:',
      categories: ['Agile & Project Management', 'Data Analytics & BI', 'Automação & integração', 'Banco de dados & armazenamento', 'Cloud & DevOps', 'IA & inovação'],
    },
    en: {
      title: 'Tools & Technologies',
      subtitle: 'Technology stack for data-driven decisions and intelligent automation',
      metricsTitle: 'Agile Metrics I Work With',
      metricsIntro: 'I use agile metrics to generate actionable insights and guide teams toward continuous improvement and delivery predictability:',
      categories: ['Agile & Project Management', 'Data Analytics & BI', 'Automation & Integration', 'Database & Storage', 'Cloud & DevOps', 'AI & Innovation'],
    },
  }[language];

  const toolCategories = [
    { tools: ['Jira', 'Confluence', 'Azure DevOps', 'Trello', 'Miro'], color: '#6816c8' },
    { tools: ['Power BI', 'Looker Studio', 'DataBricks', 'DataDog', 'Data Lake'], color: '#FF5314' },
    { tools: ['N8N', 'API Integration', 'Webhooks', 'Zapier'], color: '#6d2247' },
    { tools: ['SQL', 'Database Management', 'Data Lake', 'Cloud Storage'], color: '#d66b45' },
    { tools: ['Cloud Platforms', 'DevOps Lifecycle', 'SDLC', 'CI/CD'], color: '#6816c8' },
    { tools: ['Artificial Intelligence', 'Machine Learning Tools', 'ChatGPT/AI Tools'], color: '#FF5314' },
  ].map((category, index) => ({ ...category, category: text.categories[index] }));

  const metrics = ['Cycle Time', 'Lead Time', 'Throughput', 'Velocity', 'Sprint Report', 'Burndown Chart', 'Burnup Chart', 'Cumulative Flow Diagram', 'Control Chart', 'WIP Limits'];

  return (
    <Box sx={{ py: 10, backgroundColor: '#120822' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, color: '#ffffff' }}>{text.title}</Typography>
        <Typography variant="h5" align="center" sx={{ mb: 8, maxWidth: '800px', mx: 'auto', color: 'rgba(255,255,255,0.82)' }}>{text.subtitle}</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 4, alignItems: 'stretch', mb: 6 }}>
          {toolCategories.map((category) => (
            <Box key={category.category} sx={{ display: 'flex' }}>
              <Paper sx={{ p: 2.5, height: '100%', width: '100%', minHeight: 112, backgroundColor: '#ffffff', borderLeft: `5px solid ${category.color}`, borderRadius: 2, boxShadow: '0 20px 48px rgba(0, 0, 0, 0.28)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateX(5px)' } }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: category.color, mb: 1.5 }}>{category.category}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignContent: 'flex-start' }}>
                  {category.tools.map((tool) => (
                    <Chip key={tool} label={tool} sx={{ backgroundColor: `${category.color}15`, color: category.color, fontWeight: 500, fontSize: '0.95rem' }} />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>

        <Paper sx={{ p: 4, backgroundColor: '#ffffff', boxShadow: '0 24px 55px rgba(0, 0, 0, 0.28)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#6d2247', mb: 3 }}>{text.metricsTitle}</Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, color: '#4a4650', fontWeight: 500 }}>{text.metricsIntro}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2 }}>
            {metrics.map((metric) => (
              <Chip key={metric} label={metric} variant="outlined" sx={{ width: '100%', minHeight: 32, borderColor: '#6816c8', color: '#6816c8', fontWeight: 500, fontSize: '1rem', py: 1.25, justifyContent: 'center', '& .MuiChip-label': { display: 'block', px: 2, whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.35 }, '&:hover': { backgroundColor: 'rgba(104, 22, 200, 0.08)' } }} />
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
