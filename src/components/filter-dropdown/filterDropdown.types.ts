export interface FilterDropdownProps {
  text: string;
  icon: string;
  onClick?: (selectedOption: string) => void;
  menuItems?: string[];
}
