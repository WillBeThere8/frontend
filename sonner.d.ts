declare module "sonner" {
  import React from "react";

  export interface ToasterProps {
    theme?: string;
    className?: string;
    toastOptions?: {
      classNames?: {
        toast?: string;
        description?: string;
        actionButton?: string;
        cancelButton?: string;
      };
    };
  }

  export const Toaster: React.FC<ToasterProps>;
}
