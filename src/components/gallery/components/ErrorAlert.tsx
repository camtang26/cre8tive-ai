import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorAlertProps {
  onRetry: () => void;
}

export const ErrorAlert = ({ onRetry }: ErrorAlertProps) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <Alert variant="destructive" className="max-w-[80%]">
      <AlertDescription className="flex flex-col items-center gap-4">
        <p>Failed to load video</p>
        <Button 
          variant="outline" 
          onClick={onRetry}
          className="w-full sm:w-auto"
        >
          Try Again
        </Button>
      </AlertDescription>
    </Alert>
  </div>
);