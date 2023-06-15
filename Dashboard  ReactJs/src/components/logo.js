import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <svg
      fill="none"
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.16}
        d=""
        fill={fillColor}
      />
      <path
        d=""
        fill={fillColor}
      />
    </svg>
  );
};
