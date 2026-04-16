import { Box, Container, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { LocalizedProps } from '../i18n';

export default function Skills({ language }: LocalizedProps) {
  const text = {
    pt: {
      title: 'Skills & Competências',
      subtitle: 'Competências organizadas por frentes de atuação, com leitura mais leve e direta',
      responsibilitiesTitle: 'Principais responsabilidades & entregas',
      groups: [
        {
          title: 'Liderança & agilidade',
          accent: '#d66b45',
          bg: 'rgba(214, 107, 69, 0.12)',
          skills: ['Scrum Master profissional', 'Agilidade empresarial', 'Lean Agile Coach profissional', 'Facilitação de cerimônias ágeis', 'Resolução de conflitos', 'Liderança servidora', 'Comunicação estratégica', 'Negociação'],
        },
        {
          title: 'Dados, ferramentas & automação',
          accent: '#6816c8',
          bg: 'rgba(104, 22, 200, 0.12)',
          skills: ['Métricas ágeis', 'Power BI e Looker Studio', 'Jira e Confluence', 'Azure DevOps', 'N8N e automação de workflows', 'Integração de APIs', 'Gestão de bases de dados', 'Data Lake e Databricks'],
        },
      ],
      responsibilities: ['Disseminar o uso de práticas ágeis como Scrum, Kanban e SAFe', 'Remover impedimentos para manter o foco e o fluxo das equipes', 'Facilitar Daily, Planning, Retrospectivas, Reviews e PI Planning', 'Apoiar Product Owners na construção de backlogs claros e objetivos', 'Promover autonomia, colaboração e maturidade do time', 'Conduzir workshops e treinamentos sobre metodologias ágeis', 'Construir dashboards com Looker Studio, Power BI e Jira', 'Criar fluxos de automação com N8N e integrações entre ferramentas', 'Gerar insights por meio de dados, métricas e acompanhamento contínuo'],
    },
    en: {
      title: 'Skills & Competencies',
      subtitle: 'Competencies organized by area of practice for a clearer, lighter read',
      responsibilitiesTitle: 'Key Responsibilities & Deliverables',
      groups: [
        {
          title: 'Leadership & Agility',
          accent: '#d66b45',
          bg: 'rgba(214, 107, 69, 0.12)',
          skills: ['Professional Scrum Master', 'Business Agility', 'Lean Agile Coach Professional', 'Agile Ceremony Facilitation', 'Conflict Resolution', 'Servant Leadership', 'Strategic Communication', 'Negotiation'],
        },
        {
          title: 'Data, Tools & Automation',
          accent: '#6816c8',
          bg: 'rgba(104, 22, 200, 0.12)',
          skills: ['Agile Metrics', 'Power BI and Looker Studio', 'Jira and Confluence', 'Azure DevOps', 'N8N and workflow automation', 'API Integration', 'Database Management', 'Data Lake and Databricks'],
        },
      ],
      responsibilities: ['Spread agile practices such as Scrum, Kanban, and SAFe', 'Remove impediments to keep teams focused and flowing', 'Facilitate Daily, Planning, Retrospectives, Reviews, and PI Planning', 'Support Product Owners in building a clear and objective backlog', 'Promote autonomy, collaboration, and team maturity', 'Lead workshops and training sessions on agile methodologies', 'Build dashboards with Looker Studio, Power BI, and Jira', 'Create automation flows with N8N and tool integrations', 'Generate insights through data, metrics, and continuous tracking'],
    },
  }[language];

  const responsibilityThemes = [
    { accent: '#6816c8', bg: 'rgba(104, 22, 200, 0.09)' },
    { accent: '#FF5314', bg: 'rgba(255, 83, 20, 0.1)' },
  ];

  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: '#120822' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, color: '#ffffff' }}>{text.title}</Typography>
        <Typography variant="h5" align="center" sx={{ mb: 8, maxWidth: '800px', mx: 'auto', color: 'rgba(255,255,255,0.82)' }}>{text.subtitle}</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 4, alignItems: 'stretch', mb: 6 }}>
          {text.groups.map((group) => (
            <Paper key={group.title} sx={{ p: 4, height: '100%', minHeight: { xs: 320, md: 360 }, borderRadius: 2, backgroundColor: '#ffffff', border: `1px solid ${group.accent}33`, boxShadow: '0 20px 50px rgba(18, 8, 34, 0.18)', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 2, py: 1, mb: 3, minHeight: 60, borderRadius: 2, backgroundColor: group.bg }}>
                <Typography variant="h4" sx={{ color: group.accent }}>{group.title}</Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 1.5, alignContent: 'start', flexGrow: 1 }}>
                {group.skills.map((skill) => (
                  <Box key={skill} sx={{ minHeight: 72, px: 2, py: 1.5, borderRadius: 2, backgroundColor: group.bg, border: `1px solid ${group.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant="body1" sx={{ fontSize: '0.98rem', fontWeight: 500, lineHeight: 1.4, color: '#1f1f1f' }}>{skill}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        <Paper sx={{ p: 4, borderRadius: 2, backgroundColor: '#ffffff', border: '1px solid rgba(109, 34, 71, 0.18)', boxShadow: '0 20px 50px rgba(18, 8, 34, 0.18)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#6d2247', mb: 3 }}>{text.responsibilitiesTitle}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
            {text.responsibilities.map((responsibility, index) => {
              const theme = responsibilityThemes[Math.floor(index / 2) % responsibilityThemes.length];
              return (
                <Box key={responsibility} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.75, p: 2.25, borderRadius: 2, backgroundColor: theme.bg, border: `1px solid ${theme.accent}33`, borderLeft: `5px solid ${theme.accent}`, minHeight: 84, boxShadow: '0 12px 28px rgba(18, 8, 34, 0.08)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 16px 34px rgba(18, 8, 34, 0.12)' } }}>
                  <Box sx={{ width: 34, height: 34, borderRadius: 2, backgroundColor: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircleIcon sx={{ color: '#ffffff', fontSize: 20 }} />
                  </Box>
                  <Typography variant="body1" sx={{ color: '#1f1f1f', fontWeight: 500, lineHeight: 1.5 }}>{responsibility}</Typography>
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
