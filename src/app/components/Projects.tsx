import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutomationIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import type { LocalizedProps } from '../i18n';
import workshopTurmaImage from '../../assets/workshop-turma.png';
import dashboards from '../../assets/dashboards.png';

const images = [
  dashboards,
  'https://images.unsplash.com/photo-1690192435053-387a893ba6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3J1bSUyMG1hc3RlciUyMGNvYWNoaW5nJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzc2Mjc1MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  workshopTurmaImage,
  'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzYyNzUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

export default function Projects({ language }: LocalizedProps) {
  const text = {
    pt: {
      title: 'Projetos & realizações',
      subtitle: 'Soluções criativas que geraram impacto real em equipes e organizações',
      impactLabel: 'Impacto:',
      projects: [
        ['Dashboards estratégicos de métricas ágeis', 'Desenvolvimento de dashboards completos em Power BI, Looker Studio e Jira para acompanhamento de múltiplos times. Implementação de métricas como Cycle Time, Lead Time, Velocity, Burndown e Throughput para decisões orientadas por dados.', 'Aumento de 40% na previsibilidade de entregas e redução de 30% no tempo de ciclo', ['Power BI', 'Looker Studio', 'Jira', 'Métricas ágeis', 'Data Analytics']],
        ['Workflows inteligentes com N8N e IA', 'Construção de fluxos de automação inteligentes usando N8N para integração entre Jira, Confluence, Slack e outras ferramentas. Automação de notificações, relatórios e controle de dependências entre times.', 'Redução de 60% no tempo gasto em tarefas manuais e aumento da transparência', ['N8N', 'Automation', 'API Integration', 'Workflow', 'DevOps']],
        ['Transformação ágil organizacional', 'Liderança na implantação de práticas ágeis do zero na Senior, Koder e Questrade Financial Group, promovendo mudanças culturais profundas. Facilitação de cerimônias, treinamentos, workshops e coaching de múltiplos times simultaneamente.', 'Aumento de 80% no engajamento das equipes e melhoria significativa na qualidade', ['Scrum', 'Kanban', 'SAFe', 'Coaching', 'Change Management']],
        ['Sistema de controle de dependências', 'Desenvolvimento de solução criativa para gerenciamento e visualização de dependências entre múltiplos times e projetos complexos, utilizando integrações com Jira e dashboards customizados.', 'Otimização de processos complexos e redução de bloqueios entre times', ['Jira', 'API', 'Dashboard', 'Project Management', 'Integration']],
      ],
    },
    en: {
      title: 'Projects & Achievements',
      subtitle: 'Creative solutions that generated measurable impact for teams and organizations',
      impactLabel: 'Impact:',
      projects: [
        ['Strategic agile metrics dashboards', 'Development of complete dashboards in Power BI, Looker Studio, and Jira to track multiple teams. Implementation of metrics such as Cycle Time, Lead Time, Velocity, Burndown, and Throughput for data-driven decisions.', '40% increase in delivery predictability and 30% reduction in cycle time', ['Power BI', 'Looker Studio', 'Jira', 'Agile Metrics', 'Data Analytics']],
        ['Intelligent Workflows with N8N and AI', 'Creation of intelligent automation flows using N8N to integrate Jira, Confluence, Slack, and other tools. Automation of notifications, reports, and dependency control across teams.', '60% reduction in time spent on manual tasks and increased transparency', ['N8N', 'Automation', 'API Integration', 'Workflow', 'DevOps']],
        ['Organizational agile transformation', 'Leadership in implementing agile practices from scratch at Senior, Koder, and Questrade Financial Group, promoting deep cultural change. Facilitation of ceremonies, training, workshops, and coaching for multiple teams.', '80% increase in team engagement and significant quality improvement', ['Scrum', 'Kanban', 'SAFe', 'Coaching', 'Change Management']],
        ['Dependency control system', 'Development of a creative solution to manage and visualize dependencies across multiple teams and complex projects, using Jira integrations and custom dashboards.', 'Optimization of complex processes and reduction of blockers between teams', ['Jira', 'API', 'Dashboard', 'Project Management', 'Integration']],
      ],
    },
  }[language];

  const icons = [
    <DashboardIcon sx={{ fontSize: 50, color: '#6816c8' }} />,
    <AutomationIcon sx={{ fontSize: 50, color: '#FF5314' }} />,
    <GroupsIcon sx={{ fontSize: 50, color: '#6d2247' }} />,
    <TrendingUpIcon sx={{ fontSize: 50, color: '#d66b45' }} />,
  ];

  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: '#120822' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, color: '#ffffff' }}>{text.title}</Typography>
        <Typography variant="h5" align="center" sx={{ mb: 8, maxWidth: '800px', mx: 'auto', color: 'rgba(255,255,255,0.82)' }}>{text.subtitle}</Typography>

        <Grid container spacing={4}>
          {text.projects.map(([title, description, impact, tags], index) => (
            <Grid item xs={12} md={6} key={title as string}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', border: '1px solid rgba(124, 124, 132, 0.2)', boxShadow: '0 24px 55px rgba(0, 0, 0, 0.28)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 28px 60px rgba(0, 0, 0, 0.34)' } }}>
                <CardMedia
                  sx={{
                    height: { xs: 190, sm: 230, md: 250 },
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={images[index]}
                    alt={title as string}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: images[index] === workshopTurmaImage ? 'center 28%' : 'center',
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2 }}>{icons[index]}</Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>{title}</Typography>
                  <Typography variant="body1" paragraph color="text.secondary">{description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#FF5314', mb: 1 }}>{text.impactLabel}</Typography>
                    <Typography variant="body2" color="text.secondary">{impact}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {(tags as string[]).map((tag) => (
                      <Chip key={tag} label={tag} size="small" sx={{ backgroundColor: 'rgba(104, 22, 200, 0.12)', color: '#6816c8', fontWeight: 500 }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
