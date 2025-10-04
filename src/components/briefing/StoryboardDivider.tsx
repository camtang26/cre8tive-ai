import { briefingColors } from "@/pages/BriefingEngine";

export const StoryboardDivider = () => {
  return (
    <div className="w-full py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {/* Storyboard Frame 1 */}
          <div
            className="relative w-16 h-12 md:w-24 md:h-16 rounded border-2 flex items-center justify-center"
            style={{ borderColor: `${briefingColors.purple.DEFAULT}60` }}
          >
            <div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded text-xs font-bold"
              style={{
                background: briefingColors.purple.DEFAULT,
                color: 'white'
              }}
            >
              S1
            </div>
            <div className="w-8 h-6 md:w-12 md:h-8 bg-white/5 rounded" />
          </div>

          {/* Connecting Line */}
          <div
            className="h-0.5 w-8 md:w-16"
            style={{ background: `linear-gradient(90deg, ${briefingColors.purple.DEFAULT}, ${briefingColors.green.DEFAULT})` }}
          />

          {/* Storyboard Frame 2 */}
          <div
            className="relative w-16 h-12 md:w-24 md:h-16 rounded border-2 flex items-center justify-center"
            style={{ borderColor: `${briefingColors.green.DEFAULT}60` }}
          >
            <div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded text-xs font-bold"
              style={{
                background: briefingColors.green.DEFAULT,
                color: 'white'
              }}
            >
              S2
            </div>
            <div className="w-8 h-6 md:w-12 md:h-8 bg-white/5 rounded" />
          </div>

          {/* Connecting Line */}
          <div
            className="h-0.5 w-8 md:w-16"
            style={{ background: `linear-gradient(90deg, ${briefingColors.green.DEFAULT}, ${briefingColors.pink.DEFAULT})` }}
          />

          {/* Storyboard Frame 3 */}
          <div
            className="relative w-16 h-12 md:w-24 md:h-16 rounded border-2 flex items-center justify-center"
            style={{ borderColor: `${briefingColors.pink.DEFAULT}60` }}
          >
            <div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded text-xs font-bold"
              style={{
                background: briefingColors.pink.DEFAULT,
                color: 'white'
              }}
            >
              S3
            </div>
            <div className="w-8 h-6 md:w-12 md:h-8 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
