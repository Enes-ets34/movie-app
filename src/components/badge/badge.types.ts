export interface BadgeProps {
  children: React.ReactNode;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  color?: string;
  borderRadius?: string;
  zIndex?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

}
