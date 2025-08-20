// for default SVG imports (like Logo, Card)
declare module "*.svg" {
  const content: string;
  export default content;
}

// for ReactComponent imports (like Home, Account, Credit)
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
