import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Alert, Box, Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { LocalizedProps } from '../i18n';

const emailRecipient = 'cesar.lcaetano@gmail.com';
const emailSender = 'cesar.trabalho7@gmail.com';
const emailEndpoint = `https://formsubmit.co/ajax/${emailRecipient}`;

function createCaptcha() {
  const firstNumber = Math.floor(Math.random() * 8) + 2;
  const secondNumber = Math.floor(Math.random() * 8) + 2;
  return { question: `${firstNumber} + ${secondNumber}`, answer: String(firstNumber + secondNumber) };
}

export default function Contact({ language }: LocalizedProps) {
  const text = {
    pt: {
      connect: 'Vamos nos conectar e trocar experiências',
      emailDescription: 'Entre em contato por e-mail',
      whatsappDescription: 'Converse comigo diretamente',
      bridgeTitle: 'Colaboração que conecta estratégia, times e resultados',
      bridgeText: 'Experiência para atuar em contextos complexos, alinhar objetivos e criar pontes entre pessoas, dados e entregas.',
      englishTitle: 'Inglês avançado',
      englishSubtitle: 'Fluente para trabalhar com times internacionais e projetos globais',
      englishText: 'Pronto para colaborar em ambientes multiculturais, facilitar cerimônias em inglês e contribuir para projetos internacionais com comunicação clara e efetiva.',
      availableTitle: 'Disponível para novos desafios',
      availableSubtitle: 'Estou sempre aberto a discussões sobre como posso ajudar sua organização a:',
      availableItems: ['Implementar ou otimizar práticas ágeis', 'Criar dashboards e métricas ágeis', 'Facilitar transformação digital e cultural', 'Construir automações e workflows inteligentes', 'Escalar agilidade com SAFe', 'Desenvolver times de alta performance'],
      contactTitle: 'Vamos Conversar?',
      contactSubtitle: 'Se você procura alguém para liderar times, facilitar mudanças e impulsionar a agilidade organizacional, vamos conversar!',
      formTitle: 'Enviar e-mail',
      formIntro: `A mensagem será enviada para ${emailRecipient}.`,
      fields: { name: 'Nome', email: 'Seu e-mail', subject: 'Assunto', message: 'Mensagem' },
      captchaLabel: (question: string) => `Captcha: quanto é ${question}?`,
      captchaHelp: 'Confirme o resultado para evitar envios automatizados.',
      cancel: 'Cancelar',
      send: 'Enviar e-mail',
      sending: 'Enviando...',
      requiredError: 'Preencha todos os campos antes de enviar.',
      captchaError: 'Captcha incorreto. Confira a resposta e tente novamente.',
      success: 'Mensagem enviada com sucesso.',
      activationError: 'O envio por formulário precisa ser ativado no e-mail de destino. Verifique a caixa de entrada de cesar.lcaetano@gmail.com e clique no link de ativação enviado pelo FormSubmit.',
      sendError: 'Não foi possível enviar agora. Tente novamente em instantes ou use WhatsApp/LinkedIn.',
    },
    en: {
      connect: "Let's connect and exchange experiences",
      emailDescription: 'Reach out by email',
      whatsappDescription: 'Talk to me directly',
      bridgeTitle: 'Collaboration that connects strategy, teams, and outcomes',
      bridgeText: 'Experience working in complex contexts, aligning goals, and building bridges between people, data, and delivery.',
      englishTitle: 'Advanced English',
      englishSubtitle: 'Fluent in English for working with international teams and global projects',
      englishText: 'Ready to collaborate in multicultural environments, facilitate ceremonies in English, and contribute to international projects with clear and effective communication.',
      availableTitle: 'Available for New Challenges',
      availableSubtitle: 'I am always open to discussing how I can help your organization:',
      availableItems: ['Implement or optimize agile practices', 'Create dashboards and agile metrics', 'Facilitate digital and cultural transformation', 'Build automation and intelligent workflows', 'Scale agility with SAFe', 'Develop high-performing teams'],
      contactTitle: "Let's talk?",
      contactSubtitle: "If you're looking for someone to lead teams, facilitate change, and strengthen organizational agility, let's talk.",
      formTitle: 'Send email',
      formIntro: `The message will be sent to ${emailRecipient}.`,
      fields: { name: 'Name', email: 'Your email', subject: 'Subject', message: 'Message' },
      captchaLabel: (question: string) => `Captcha: what is ${question}?`,
      captchaHelp: 'Confirm the result to prevent automated submissions.',
      cancel: 'Cancel',
      send: 'Send email',
      sending: 'Sending...',
      requiredError: 'Fill in all fields before sending.',
      captchaError: 'Incorrect captcha. Check the answer and try again.',
      success: 'Message sent successfully.',
      activationError: 'Form submission must be activated in the destination inbox. Check cesar.lcaetano@gmail.com and click the activation link sent by FormSubmit.',
      sendError: 'Could not send right now. Try again shortly or use WhatsApp/LinkedIn.',
    },
  }[language];

  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [captcha, setCaptcha] = useState(createCaptcha);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [emailSending, setEmailSending] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: '', email: '', subject: '', message: '', captcha: '' });

  const contactMethods = [
    { icon: <LinkedInIcon sx={{ fontSize: 60, color: '#6816c8' }} />, title: 'LinkedIn', description: text.connect, link: 'https://www.linkedin.com/in/cesarlcaetano/', linkText: '/in/cesarlcaetano', color: '#6816c8' },
    { icon: <EmailIcon sx={{ fontSize: 60, color: '#FF5314' }} />, title: 'E-mail', description: text.emailDescription, link: `mailto:${emailRecipient}`, linkText: emailRecipient, color: '#FF5314' },
    { icon: <WhatsAppIcon sx={{ fontSize: 60, color: '#6d2247' }} />, title: 'WhatsApp', description: text.whatsappDescription, link: 'https://wa.me/5547992047708', linkText: '+55 (47) 99204-7708', color: '#6d2247' },
  ];

  const handleEmailDialogOpen = () => {
    setFormError('');
    setFormSuccess('');
    setCaptcha(createCaptcha());
    setEmailForm((currentForm) => ({ ...currentForm, captcha: '' }));
    setEmailDialogOpen(true);
  };

  useEffect(() => {
    window.addEventListener('open-email-dialog', handleEmailDialogOpen);
    return () => window.removeEventListener('open-email-dialog', handleEmailDialogOpen);
  });

  const handleEmailDialogClose = () => {
    setEmailDialogOpen(false);
    setFormError('');
    setFormSuccess('');
    setEmailSending(false);
  };

  const handleEmailFormChange = (field: keyof typeof emailForm) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm((currentForm) => ({ ...currentForm, [field]: event.target.value }));
  };

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!emailForm.name.trim() || !emailForm.email.trim() || !emailForm.subject.trim() || !emailForm.message.trim()) {
      setFormError(text.requiredError);
      return;
    }

    if (emailForm.captcha.trim() !== captcha.answer) {
      setFormError(text.captchaError);
      setCaptcha(createCaptcha());
      setEmailForm((currentForm) => ({ ...currentForm, captcha: '' }));
      return;
    }

    setEmailSending(true);

    try {
      const formData = new FormData();
      formData.append('name', emailForm.name);
      formData.append('email', emailSender);
      formData.append('_replyto', emailSender);
      formData.append('visitor_email', emailForm.email);
      formData.append('subject', emailForm.subject);
      formData.append('_subject', emailForm.subject);
      formData.append('message', emailForm.message);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch(emailEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: formData });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success === 'false') throw new Error(result?.message || 'Falha ao enviar mensagem.');

      setFormSuccess(text.success);
      setEmailForm({ name: '', email: '', subject: '', message: '', captcha: '' });
      setCaptcha(createCaptcha());
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      setFormError(message.toLowerCase().includes('activation') ? text.activationError : text.sendError);
    } finally {
      setEmailSending(false);
    }
  };

  return (
    <Box id="contact" component="footer" sx={{ py: 10, backgroundColor: '#120822' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center', maxWidth: '860px', mx: 'auto' }}>
          <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 700, mb: 2 }}>{text.bridgeTitle}</Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>{text.bridgeText}</Typography>
        </Box>

        <Card sx={{ p: { xs: 3, md: 5 }, background: 'linear-gradient(135deg, #120822 0%, #6d2247 52%, #6816c8 100%)', color: '#ffffff', textAlign: 'center' }}>
          <Box sx={{ mb: 2 }}><LanguageIcon sx={{ fontSize: 60 }} /></Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>{text.englishTitle}</Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>{text.englishSubtitle}</Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>{text.englishText}</Typography>
        </Card>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#ffffff', mb: 3 }}>{text.availableTitle}</Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'rgba(255,255,255,0.82)' }}>{text.availableSubtitle}</Typography>
          <Box sx={{ maxWidth: '900px', mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
            {text.availableItems.map((item) => (
              <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                <CheckCircleIcon sx={{ color: '#FF5314', fontSize: 22, mt: 0.15, flexShrink: 0 }} />
                <Typography variant="body1" sx={{ textAlign: 'left', color: '#ffffff' }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>

      <Box
        id="lets-talk"
        sx={{
          mt: { xs: 8, md: 10 },
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #120822 0%, #6d2247 48%, #6816c8 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(255, 83, 20, 0.22), transparent 28%), radial-gradient(circle at bottom left, rgba(214, 107, 69, 0.24), transparent 30%)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, color: '#ffffff' }}>{text.contactTitle}</Typography>
          <Typography variant="h5" align="center" sx={{ mb: 8, maxWidth: '800px', mx: 'auto', color: 'rgba(255,255,255,0.82)' }}>{text.contactSubtitle}</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 4, alignItems: 'stretch' }}>
            {contactMethods.map((method) => {
              const isEmailMethod = method.title === 'E-mail';
              return (
                <Box key={method.title} sx={{ display: 'flex' }}>
                  <Card sx={{ height: '100%', width: '100%', minWidth: 0, textAlign: 'center', backgroundColor: '#ffffff', border: '1px solid rgba(124, 124, 132, 0.2)', borderRadius: 2, boxShadow: '0 20px 50px rgba(18, 8, 34, 0.18)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 24px 55px rgba(18, 8, 34, 0.24)' }, borderTop: `4px solid ${method.color}` }}>
                    <CardContent sx={{ p: { xs: 2.5, sm: 3 }, width: '100%', minWidth: 0 }}>
                      <Box sx={{ mb: 2 }}>{method.icon}</Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>{method.title}</Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>{method.description}</Typography>
                      <Button variant="contained" href={isEmailMethod ? undefined : method.link} target={!isEmailMethod ? '_blank' : undefined} onClick={isEmailMethod ? handleEmailDialogOpen : undefined} sx={{ maxWidth: '100%', backgroundColor: method.color, '&:hover': { backgroundColor: method.color, opacity: 0.9 }, textTransform: 'none', fontSize: { xs: '0.88rem', sm: '1rem' }, px: { xs: 2, sm: 3 }, py: 1.5, overflowWrap: 'anywhere', whiteSpace: 'normal' }}>
                        {method.linkText}
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Container>

        <Dialog
          open={emailDialogOpen}
          onClose={handleEmailDialogClose}
          fullWidth
          maxWidth="sm"
          PaperProps={{ sx: { m: { xs: 1.5, sm: 4 }, width: { xs: 'calc(100% - 24px)', sm: '100%' } } }}
        >
          <DialogTitle sx={{ color: '#120822', fontWeight: 700 }}>{text.formTitle}</DialogTitle>
          <Box component="form" onSubmit={handleEmailSubmit}>
            <DialogContent sx={{ display: 'grid', gap: 2, pt: 1 }}>
              <Typography variant="body2" sx={{ color: '#4a4650' }}>{text.formIntro}</Typography>
              {formError ? <Alert severity="error">{formError}</Alert> : null}
              {formSuccess ? <Alert severity="success">{formSuccess}</Alert> : null}
              <TextField label={text.fields.name} value={emailForm.name} onChange={handleEmailFormChange('name')} required fullWidth disabled={emailSending} />
              <TextField label={text.fields.email} type="email" value={emailForm.email} onChange={handleEmailFormChange('email')} required fullWidth disabled={emailSending} />
              <TextField label={text.fields.subject} value={emailForm.subject} onChange={handleEmailFormChange('subject')} required fullWidth disabled={emailSending} />
              <TextField label={text.fields.message} value={emailForm.message} onChange={handleEmailFormChange('message')} required fullWidth multiline minRows={5} disabled={emailSending} />
              <TextField label={text.captchaLabel(captcha.question)} value={emailForm.captcha} onChange={handleEmailFormChange('captcha')} required fullWidth inputProps={{ inputMode: 'numeric' }} helperText={text.captchaHelp} disabled={emailSending} />
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3 }}>
              <Button onClick={handleEmailDialogClose} sx={{ color: '#6d2247' }} disabled={emailSending}>{text.cancel}</Button>
              <Button type="submit" variant="contained" disabled={emailSending || Boolean(formSuccess)} sx={{ backgroundColor: '#FF5314', '&:hover': { backgroundColor: '#d66b45' } }}>{emailSending ? text.sending : text.send}</Button>
            </DialogActions>
          </Box>
        </Dialog>

        <Box sx={{ mt: 6, pt: 3, textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.14)' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)' }}>(c) {new Date().getFullYear()} Cesar Lima Caetano - Agile Coach</Typography>
        </Box>
      </Box>
    </Box>
  );
}
