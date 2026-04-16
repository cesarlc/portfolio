import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BarChartIcon from '@mui/icons-material/BarChart';
import type { LocalizedProps } from '../i18n';

export default function About({ language }: LocalizedProps) {
  const text = {
    pt: {
      title: 'Sobre Mim',
      subtitle: 'Transformando equipes e impulsionando resultados por meio de agilidade, dados e cultura colaborativa',
      journeyTitle: 'Minha Jornada',
      highlights: [
        ['11+ anos em agilidade', 'Experiência sólida transformando times por meio de Scrum, Kanban e SAFe'],
        ['Liderança servidora', 'Facilitação de múltiplos times, resolução de conflitos e coaching ágil'],
        ['Orientado por dados', 'Dashboards e métricas ágeis para decisões baseadas em dados reais'],
        ['Inovação & automação', 'Workflows inteligentes com N8N, IA e soluções criativas'],
      ],
      paragraphs: [
        'Minha missão é capacitar equipes, criar ambientes colaborativos e promover uma cultura ágil que gera resultados reais. Com mais de 15 anos em tecnologia, minha jornada começou em 2008 como desenvolvedor Java e Delphi, até descobrir que meu verdadeiro propósito era ajudar times a trabalharem melhor juntos.',
        'Na Senior, mergulhei no universo das metodologias ágeis. Lá, implantei práticas do zero, promovendo mudanças culturais que impactaram diretamente a performance e o engajamento das equipes.',
        'Atualmente, facilito Scrum e Kanban em múltiplos times, removendo impedimentos, apoiando Product Owners e utilizando métricas ágeis em ferramentas como Jira, Confluence e Azure DevOps para decisões orientadas por dados.',
        'Também tenho experiência em SAFe, N8N, IA, Cloud e automações, construindo soluções criativas que aumentam previsibilidade e produtividade.',
      ],
      belief: 'Acredito que a verdadeira inovação nasce quando unimos tecnologia, pessoas e coragem para experimentar.',
    },
    en: {
      title: 'About Me',
      subtitle: 'Transforming teams and driving outcomes through agility, data, and collaborative culture',
      journeyTitle: 'My Journey',
      highlights: [
        ['11+ Years in Agility', 'Solid experience transforming teams through Scrum, Kanban, and SAFe'],
        ['Servant Leadership', 'Facilitation across multiple teams, conflict resolution, and agile coaching'],
        ['Data-driven', 'Dashboards and agile metrics for decisions based on real data'],
        ['Innovation & Automation', 'Smart workflows with N8N, AI, and creative solutions'],
      ],
      paragraphs: [
        'My mission is to empower teams, create collaborative environments, and promote an agile culture that delivers real outcomes. With more than 15 years in technology, my journey began in 2008 as a Java and Delphi developer, until I found my purpose in helping teams work better together.',
        'At Senior, I dove into agile methodologies. There, I implemented practices from scratch and promoted cultural changes that directly improved team performance and engagement.',
        'Today, I facilitate Scrum and Kanban across multiple teams, remove impediments, support Product Owners, and use agile metrics in tools like Jira, Confluence, and Azure DevOps for data-driven decisions.',
        'I also have experience with SAFe, N8N, AI, Cloud, and automation, building creative solutions that increase predictability and productivity.',
      ],
      belief: 'I believe true innovation happens when technology, people, and the courage to experiment come together.',
    },
  }[language];

  const icons = [
    <TrendingUpIcon sx={{ fontSize: 50, color: '#FF5314' }} />,
    <GroupsIcon sx={{ fontSize: 50, color: '#6d2247' }} />,
    <BarChartIcon sx={{ fontSize: 50, color: '#6816c8' }} />,
    <LightbulbIcon sx={{ fontSize: 50, color: '#d66b45' }} />,
  ];

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: '#120822' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, color: '#ffffff' }}>
          {text.title}
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto', color: 'rgba(255,255,255,0.82)' }}>
          {text.subtitle}
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 4, mb: 6 }}>
          {text.highlights.map(([title, description], index) => (
            <Card key={title} sx={{ height: '100%', minHeight: { xs: 220, md: 250 }, textAlign: 'center', backgroundColor: '#ffffff', border: '1px solid rgba(104, 22, 200, 0.12)', boxShadow: '0 18px 45px rgba(18, 8, 34, 0.18)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 24px 60px rgba(18, 8, 34, 0.26)' } }}>
              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mb: 2 }}>{icons[index]}</Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>{title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 420 }}>{description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Card sx={{ p: 4, backgroundColor: '#ffffff', border: '1px solid rgba(214, 107, 69, 0.2)', boxShadow: '0 24px 60px rgba(18, 8, 34, 0.2)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#6d2247', mb: 3 }}>{text.journeyTitle}</Typography>
          {text.paragraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" paragraph>{paragraph}</Typography>
          ))}
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#6816c8', mt: 3 }}>{text.belief}</Typography>
        </Card>
      </Container>
    </Box>
  );
}
