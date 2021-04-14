declare namespace ExpenseItemCssNamespace {
  export interface IExpenseItemCss {
    container: string;
    divider: string;
  }
}

declare const ExpenseItemCssModule: ExpenseItemCssNamespace.IExpenseItemCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ExpenseItemCssNamespace.IExpenseItemCss;
};

export = ExpenseItemCssModule;
