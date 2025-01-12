import MailIcon from '@assets/icons/Mail.svg?react';
import SearchIcon from '@assets/icons/Search.svg?react';
import InstagramIcon from '@assets/icons/Instagram.svg?react';
import FacebookIcon from '@assets/icons/Facebook.svg?react';
import TwiitterIcon from '@assets/icons/Twitter.svg?react';
import YoutubeIcon from '@assets/icons/Youtube.svg?react';
import IMDBIcon from '@assets/icons/Imdb.svg?react';
import HearthFillIcon from '@assets/icons/Heart_fill.svg?react';

export const Icons = {
  mail: MailIcon,
  search: SearchIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: TwiitterIcon,
  youtube: YoutubeIcon,
  imdb: IMDBIcon,
  hearth_fill: HearthFillIcon,
};

export type icons = keyof typeof Icons;
