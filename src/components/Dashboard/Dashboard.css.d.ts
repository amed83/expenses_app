declare namespace DashboardCssNamespace {
  export interface IDashboardCss {
    container: string;
    error: string;
  }
}

declare const DashboardCssModule: DashboardCssNamespace.IDashboardCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DashboardCssNamespace.IDashboardCss;
};

export = DashboardCssModule;
