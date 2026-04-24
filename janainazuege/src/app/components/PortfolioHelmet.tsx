import { useEffect } from 'react';

export function PortfolioHelmet() {
  useEffect(() => {
    document.title = 'Janaina Züege - Organização e Decoração de Eventos';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Portfólio de Janaina Roberta Züege Caetano - Especialista em organização, decoração e branding de eventos sociais. Tecnóloga em Eventos com experiência em criar momentos únicos e inesquecíveis.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Portfólio de Janaina Roberta Züege Caetano - Especialista em organização, decoração e branding de eventos sociais. Tecnóloga em Eventos com experiência em criar momentos únicos e inesquecíveis.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'eventos, decoração de eventos, branding, organização de festas, casamento, Paranaguamirim, Santa Catarina, Permanecerei Festas'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'eventos, decoração de eventos, branding, organização de festas, casamento, Paranaguamirim, Santa Catarina, Permanecerei Festas';
      document.head.appendChild(meta);
    }
  }, []);

  return null;
}
