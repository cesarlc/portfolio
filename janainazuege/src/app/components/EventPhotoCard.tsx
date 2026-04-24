import { useState } from 'react';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';
import { ImageWithFallback } from './media/ImageWithFallback';

interface EventPhotoCardProps {
  photo: {
    src: string;
    title: string;
    description: string;
  };
  onClick: () => void;
}

export function EventPhotoCard({ photo, onClick }: EventPhotoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      elevation={3}
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
        },
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          height: { xs: 210, sm: 250, md: 300 },
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'secondary.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1.5,
        }}
      >
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
            sx={{ position: 'absolute', top: 0, left: 0 }}
          />
        )}
        <ImageWithFallback
          src={photo.src}
          alt={photo.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
          onLoad={() => setImageLoaded(true)}
        />
      </Box>
      <CardContent sx={{ p: { xs: 2.25, sm: 3 } }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontSize: { xs: '1.05rem', sm: '1.25rem' } }}>
          {photo.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.92rem', sm: '0.95rem' } }}>
          {photo.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
