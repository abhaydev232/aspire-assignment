import React, { ReactNode } from "react";
import './MainContainer.css';

// Props interface
interface ShadowContainerProps {
  children: ReactNode;
}

const ShadowContainer: React.FC<ShadowContainerProps> = ({ children }) => {
  return (
    <div className="shadow-container">
      {children}
    </div>
  );
};

export default ShadowContainer;
