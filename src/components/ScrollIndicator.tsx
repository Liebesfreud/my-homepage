import { Icons } from "@/lib/icons";
import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  isVisible: boolean;
}

export function ScrollIndicator({ isVisible }: ScrollIndicatorProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      setIsAnimating(false);
    } else {
      setIsAnimating(true);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <div className={`p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg ${
          isAnimating ? 'animate-bounce' : ''
        }`}>
          <Icons.ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
