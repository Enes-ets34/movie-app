import { Colors } from '@/theme/colors';

export type ButtonProps = {
  text: string;
  variant?: 'outlined' | 'contained';
  onClick: () => void;
  color?: keyof typeof Colors;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};
