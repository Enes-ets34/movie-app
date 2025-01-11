import React from 'react';
import './footer.scss';
import Icon from '../icon/Icon';
import { Icons } from '@/theme/icons';
import Text from '../text/Text';
import { Colors } from '@/theme/colors';
import footerData from './footerData.json';
import { IconItem, LinkItem } from './footer.types';


const Footer: React.FC = () => {
  if (!footerData) return null;

  return (
    <footer className='footer'>
      <div className='footer__icons'>
        {footerData.icons.map((icon: IconItem) =>
          icon.icon ? (
            <a href='#'>
              <Icon
                key={icon.name}
                source={Icons[icon.icon as keyof typeof Icons]}
                size={{ ...icon.size }}
              />
            </a>
          ) : null
        )}
      </div>

      <div className='footer__links'>
        {footerData.links.map((link: LinkItem) => (
          <a href='#'>
            <Text
              key={link.text}
              color={Colors[link.color as keyof typeof Colors]}
            >
              {link.text}
            </Text>
          </a>
        ))}
      </div>

      <div className='footer__copyright'>
        <Text bold color={Colors.gray500} size='sm'>
          © 2023 Movies by Octet
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
