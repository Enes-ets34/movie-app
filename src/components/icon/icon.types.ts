export interface IconProps {
  source: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  size: { width?: number; height?: number };
  color?: string;
  stroke?: string;
  style?: React.CSSProperties;
}
