import React, { useEffect } from "react";

const PrintComponentsName = (WrappedComponent: any, componentName: any) => {
  const PrintComponentsName = (props: any) => {
    useEffect(() => {
      console.log(`Hello from ${componentName}`);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return PrintComponentsName;
};

export default PrintComponentsName;
