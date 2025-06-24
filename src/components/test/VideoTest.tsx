import { useState } from 'react';
import { VideoPlayer } from '@/components/core/VideoPlayer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const VideoTest = () => {
  const [testCase, setTestCase] = useState<'valid' | 'invalid' | 'missing'>('valid');

  // Test video URLs
  const videos = {
    valid: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
    invalid: 'https://example.com/nonexistent.mp4',
    missing: ''
  };

  const handleTestChange = (newCase: 'valid' | 'invalid' | 'missing') => {
    setTestCase(newCase);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Video Player Test</CardTitle>
        <CardDescription>
          Test different video playback scenarios and error handling
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-x-4 mb-6">
          <Button 
            variant={testCase === 'valid' ? 'default' : 'outline'}
            onClick={() => handleTestChange('valid')}
          >
            Valid Video
          </Button>
          <Button 
            variant={testCase === 'invalid' ? 'default' : 'outline'}
            onClick={() => handleTestChange('invalid')}
          >
            Invalid URL
          </Button>
          <Button 
            variant={testCase === 'missing' ? 'default' : 'outline'}
            onClick={() => handleTestChange('missing')}
          >
            Missing Source
          </Button>
        </div>

        <VideoPlayer
          src={videos[testCase]}
          title="Test Video"
          fallbackContent={
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Unable to play the video. You can:
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleTestChange('valid')}
              >
                Try a different video
              </Button>
            </div>
          }
          onError={(error) => {
            // Video error handling
          }}
          onLoad={() => {
            // Video loaded successfully
          }}
        />
      </CardContent>
    </Card>
  );
}; 