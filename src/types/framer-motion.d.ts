declare module 'framer-motion' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    onClick?: (event: any) => void;
    onComplete?: () => void;
    [key: string]: any;
  }

  export interface AnimatePresenceProps {
    children?: ReactNode;
    mode?: string;
    [key: string]: any;
  }

  export const motion: {
    div: ComponentType<MotionProps>;
    section: ComponentType<MotionProps>;
    header: ComponentType<MotionProps>;
    h1: ComponentType<MotionProps>;
    h2: ComponentType<MotionProps>;
    h3: ComponentType<MotionProps>;
    p: ComponentType<MotionProps>;
    span: ComponentType<MotionProps>;
    button: ComponentType<MotionProps>;
    a: ComponentType<MotionProps>;
    li: ComponentType<MotionProps>;
    ul: ComponentType<MotionProps>;
    img: ComponentType<MotionProps>;
    video: ComponentType<MotionProps>;
    [key: string]: ComponentType<MotionProps>;
  };

  export const AnimatePresence: ComponentType<AnimatePresenceProps>;
  export const useInView: (ref: any, options?: any) => boolean;
}
