import React, { useState, useRef, useEffect } from 'react';
import './filterDropdown.scss';
import Text from '../text/Text';
import Icon from '../icon/Icon';
import { Icons } from '@/theme/icons';
import { FilterDropdownProps } from './filterDropdown.types';
import { Colors } from '@/theme/colors';

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  text,
  icon,
  onClick,
  menuItems = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleItemClick = (item: string) => {
    if (item === selectedItem) {
      setSelectedItem(undefined);
      if (onClick) onClick('');
    } else {
      setSelectedItem(item);
      if (onClick) onClick(item);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='filter-dropdown' ref={dropdownRef}>
      <button className='filter-dropdown__button' onClick={toggleDropdown}>
        <Text color={Colors.lightBlue500}>{text}</Text>
        {selectedItem && <span className='dot'></span>}
        {icon && (
          <Icon
            stroke={Colors.lightBlue500}
            source={Icons[icon as keyof typeof Icons]}
            size={{ width: 18, height: 18 }}
          />
        )}
      </button>
      {isOpen && (
        <ul className='filter-dropdown__menu'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`filter-dropdown__item ${
                item === selectedItem ? 'selected' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
