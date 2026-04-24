# Guia de Personalização

## 📸 Como Adicionar a Foto de Perfil Real

### Opção 1: Extrair do PDF (Recomendado)
1. Abra o arquivo `Janaina_Caetano-Currículo.pdf` em um visualizador de PDF
2. Clique com o botão direito na foto de perfil
3. Selecione "Copiar imagem" ou "Salvar imagem como..."
4. Salve a imagem como `profile.jpg` na pasta `src/imports/`
5. Atualize o arquivo `src/app/App.tsx`:

```tsx
// Na linha onde ProfileAvatar é usado no header (cerca da linha 125):
<ProfileAvatar
  size={50}
  src="/src/imports/profile.jpg"  // Adicione esta linha
  sx={{ mr: 2, border: '2px solid', borderColor: 'primary.main' }}
/>

// Na linha onde ProfileAvatar é usado no hero (cerca da linha 168):
<ProfileAvatar
  size={180}
  src="/src/imports/profile.jpg"  // Adicione esta linha
  sx={{
    margin: '0 auto 2rem',
    border: '4px solid white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  }}
/>

// No menu mobile (cerca da linha 156):
<ProfileAvatar 
  size={80} 
  src="/src/imports/profile.jpg"  // Adicione esta linha
  sx={{ margin: '0 auto', mb: 1 }} 
/>
```

### Opção 2: Usar Outra Foto
Se você preferir usar uma foto diferente:
1. Salve a foto desejada como `profile.jpg` na pasta `src/imports/`
2. Siga os mesmos passos da Opção 1

## 🎨 Como Ajustar as Cores

Se quiser ajustar a paleta de cores, edite o arquivo `src/app/App.tsx` na seção do tema (cerca da linha 42):

```tsx
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4A574', // Cor principal (madeira)
      light: '#F5E6D3', // Cor clara
      dark: '#C19A6B', // Cor escura
    },
    secondary: {
      main: '#F4C7C3', // Cor secundária (rosa)
      light: '#FFE8E6', // Rosa claro
    },
    background: {
      default: '#FFFBF7', // Fundo da página
      paper: '#FFFFFF', // Fundo dos cards
    },
    text: {
      primary: '#5D4E37', // Texto principal
      secondary: '#8B7355', // Texto secundário
    },
  },
});
```

## ✏️ Como Editar o Conteúdo

### Informações de Contato
Edite o arquivo `src/app/App.tsx` na seção de contato (cerca da linha 410):

```tsx
<Typography variant="body1" sx={{ color: 'text.primary' }}>
  (47) 99224-4757  // Altere aqui
</Typography>

<Typography variant="body1" sx={{ color: 'text.primary' }}>
  janainazuege.hp@gmail.com  // Altere aqui
</Typography>

<Button
  href="https://wa.me/5547992244757"  // Altere o número aqui
  target="_blank"
>
```

### Adicionar/Remover Fotos do Portfólio
Edite a array `eventPhotos` no arquivo `src/app/App.tsx` (cerca da linha 76):

```tsx
const eventPhotos = [
  {
    src: '/src/imports/nova-foto.jpeg',  // Caminho da foto
    title: 'Título da Foto',
    description: 'Descrição da foto',
  },
  // Adicione mais fotos aqui
];
```

### Editar Experiência Profissional
Edite a seção de experiência no arquivo `src/app/App.tsx` (cerca da linha 250):

```tsx
<Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 400 }}>
  NOME DA EMPRESA
</Typography>
<Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
  Cargo | Período
</Typography>
```

## 🔧 Favicon (Ícone da Guia do Navegador)

O favicon pode ser configurado no arquivo `janainazuege/index.html`. O avatar com as iniciais "JZ" já serve como identificação visual do site.

## 📱 Testar em Dispositivos Móveis

O site é totalmente responsivo. Para testar:
1. Redimensione a janela do navegador
2. Use as ferramentas de desenvolvedor (F12 → Toggle Device Toolbar)
3. Teste em dispositivos reais

## 🆘 Precisa de Ajuda?

Se precisar fazer alterações mais complexas, consulte a documentação do Material UI:
- https://mui.com/material-ui/getting-started/

Ou revise o arquivo README.md para mais informações sobre a estrutura do projeto.
