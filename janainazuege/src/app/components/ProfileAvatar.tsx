import { Avatar } from '@mui/material';

interface ProfileAvatarProps {
  size?: number;
  src?: string;
  sx?: any;
}

export function ProfileAvatar({ size = 180, src, sx = {} }: ProfileAvatarProps) {
  return (
    <Avatar
      src={src}
      alt="Janaina Roberta Züege Caetano"
      sx={{
        width: size,
        height: size,
        bgcolor: src ? undefined : '#D4A574',
        color: 'white',
        fontSize: size * 0.4,
        fontWeight: 300,
        letterSpacing: '0.1em',
        ...sx,
      }}
    >
      {!src && 'JZ'}
    </Avatar>
  );
}
