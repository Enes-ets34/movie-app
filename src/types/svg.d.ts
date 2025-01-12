declare module '*.svg?react' {
    import { SVGProps } from 'react';
    const content: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    export default content;
  }