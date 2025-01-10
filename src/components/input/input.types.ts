export interface InputProps {
  type?: 'text' | 'password';
  label?: string;
  placeholder?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}