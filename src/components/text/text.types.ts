export type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export interface TextProps {
  size?: TextSize;
  bold?: boolean;
  color?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
