import { Suspense, lazy, useEffect, useState } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

// Lazy load Spline to avoid Three.js conflicts
const Spline = lazy(() => 
  import('@splinetool/react-spline').then((module) => {
    // Suppress Three.js multiple instances warning
    if (typeof window !== 'undefined') {
      const originalWarn = console.warn;
      console.warn = (...args) => {
        if (args[0]?.includes?.('THREE') || args[0]?.includes?.('Multiple instances')) {
          return; // Suppress Three.js warnings
        }
        originalWarn(...args);
      };
    }
    return module;
  })
);

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render on client side to avoid SSR issues
  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
          <div className="loader">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
