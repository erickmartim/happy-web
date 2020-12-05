import React from 'react';

import 'styles/components/short-location.scss';

interface ShortLocationProps {
  textAlign?: string;
}

export default function ShortLocationComponent(props: any) {

  const ShortLocationProps = props as ShortLocationProps;
  const className = ShortLocationProps?.textAlign ? `text-${ShortLocationProps?.textAlign}` : '';
  
  return (
    <div className={`app-short-location ${className}`}>
      <strong>São Paulo</strong>
      <span>São Paulo</span>
    </div>
  )
}