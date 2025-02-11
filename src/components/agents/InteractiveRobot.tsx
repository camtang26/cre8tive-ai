'use client'

import React from 'react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"

interface SplineSceneErrorBoundaryProps {
  children: React.ReactNode;
}

interface SplineSceneErrorBoundaryState {
  hasError: boolean;
}

class SplineSceneErrorBoundary extends React.Component<
  SplineSceneErrorBoundaryProps,
  SplineSceneErrorBoundaryState
> {
  constructor(props: SplineSceneErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in SplineScene:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with the Spline scene.</div>;
    }

    return this.props.children;
  }
}

export const InteractiveRobot = () => {
  return (
    <div className="w-full h-screen bg-black/[0.96] relative overflow-hidden">
      <div className="w-full h-full relative">
        <SplineSceneErrorBoundary>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </SplineSceneErrorBoundary>
      </div>
    </div>
  )
} 