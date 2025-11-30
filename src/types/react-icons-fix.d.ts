// Project local augmentation for react-icons types
// Fixes TS2786 issues by ensuring IconType returns JSX.Element | null

import * as React from 'react';

declare module 'react-icons/lib' {
  export interface IconTree {
    tag: string;
    attr: Record<string, string>;
    child: IconTree[];
  }

  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  // Use JSX.Element | null so icons are valid JSX components under strict TS config
  export type IconType = (props: IconBaseProps) => React.JSX.Element | null;

  export function GenIcon(data: IconTree): (props: IconBaseProps) => React.JSX.Element | null;
  export function IconBase(props: IconBaseProps & { attr?: Record<string, string> }): JSX.Element;
}

declare module 'react-icons' {
  export * from 'react-icons/lib';
}
