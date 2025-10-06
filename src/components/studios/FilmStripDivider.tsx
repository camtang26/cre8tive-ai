export const FilmStripDivider = () => {
  return (
    <div className="relative w-full h-24 md:h-32 my-12 md:my-16" aria-hidden="true">
      {/* Film strip background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent">
        {/* Film stock base */}
        <div className="absolute inset-y-0 left-0 right-0 border-t-2 border-b-2 border-orange-500/30" />

        {/* Left sprocket holes */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 flex flex-col justify-around py-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`left-${i}`}
              className="w-4 md:w-6 h-3 md:h-4 rounded-sm bg-black border-2 border-orange-500/60"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(249,115,22,0.3)'
              }}
            />
          ))}
        </div>

        {/* Right sprocket holes */}
        <div className="absolute right-4 md:right-8 top-0 bottom-0 flex flex-col justify-around py-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`right-${i}`}
              className="w-4 md:w-6 h-3 md:h-4 rounded-sm bg-black border-2 border-orange-500/60"
              style={{
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(249,115,22,0.3)'
              }}
            />
          ))}
        </div>

        {/* Film frame markers */}
        <div className="absolute left-16 md:left-20 right-16 md:right-20 top-1/2 -translate-y-1/2 flex justify-between items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-16 md:h-20 bg-gradient-to-b from-orange-500/40 via-orange-500/20 to-orange-500/40"
              style={{
                boxShadow: '0 0 4px rgba(249,115,22,0.4)'
              }}
            />
          ))}
        </div>

        {/* Frame number */}
        <div className="absolute bottom-2 right-20 md:right-24 text-orange-500/60 text-xs md:text-sm font-mono tracking-wider">
          35mm
        </div>
      </div>
    </div>
  );
};
