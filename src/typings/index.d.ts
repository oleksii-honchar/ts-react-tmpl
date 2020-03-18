export * from './AppConfig';

declare global {
  const PKG_NAME: string;
  const PKG_VERSION: string;

  interface Window {
    config: object;
  }
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}