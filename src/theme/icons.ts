import MailIcon from '@assets/icons/Mail.svg?react';
import SearchIcon from '@assets/icons/Search.svg?react';
import InstagramIcon from '@assets/icons/Instagram.svg?react';
import FacebookIcon from '@assets/icons/Facebook.svg?react';
import TwiitterIcon from '@assets/icons/Twitter.svg?react';
import YoutubeIcon from '@assets/icons/Youtube.svg?react';

export const Icons = {
  mail: MailIcon,
  search: SearchIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwiitterIcon,
  youtube: YoutubeIcon,
};

export type icons = keyof typeof Icons;
