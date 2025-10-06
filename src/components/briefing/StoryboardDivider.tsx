import { briefingPalette } from "@/components/briefing/palette";

interface StoryboardDividerProps {
  sceneNumbers?: number[];
}

export const StoryboardDivider = ({ sceneNumbers = [1, 2, 3] }: StoryboardDividerProps) => {
  // Color rotation based on scene number
  const getColorForScene = (index: number) => {
    const colors = [
      briefingPalette.indigo.DEFAULT,
      briefingPalette.cyan.DEFAULT,
      briefingPalette.fuchsia.DEFAULT,
    ];
    return colors[index % colors.length];
  };

  // Only show the number of frames based on the sceneNumbers array length
  const visibleScenes = sceneNumbers.slice(0, 3);

  return (
    <div className="w-full py-8 px-4 overflow-hidden">
      <div className="container mx-auto max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleScenes.map((num, index) => (
            <div
              key={`${num}-${index}`}
              className="relative aspect-video border-2 rounded flex items-center justify-center"
              style={{ borderColor: `${getColorForScene(index)}60` }}
            >
              <div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded text-xs font-bold"
                style={{
                  background: getColorForScene(index),
                  color: 'white'
                }}
              >
                S{num}
              </div>
              <div
                className="w-2/3 h-2/3 rounded"
                style={{ background: briefingPalette.neutrals.panel }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
