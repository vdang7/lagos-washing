'use client' // Error components must be Client Components

import { registerScrollListener, unregisterScrollListener } from '@/functions/scrollManager';
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export function ScrollOnce({ children }: Props) {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowComponents(true);
    };

    registerScrollListener(handleScroll);

    return () => {
      unregisterScrollListener(handleScroll);
    };
  }, []);

  return <>{showComponents && children}</>;
}
