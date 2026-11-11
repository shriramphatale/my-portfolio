import React from 'react';

interface GridDividerProps {
  withHatch?: boolean;
  hatchHeight?: string;
  className?: string;
}

export const GridDivider: React.FC<GridDividerProps> = ({
  withHatch = false,
  hatchHeight = 'h-3',
  className = '',
}) => {
  if (withHatch) {
    return (
      <div className={`w-full border-y border-[#242426] ${className}`}>
        <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#0c0c0e]">
          <div className={`w-full ${hatchHeight} bg-diagonal-hatch opacity-70`} />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full border-b border-[#242426] ${className}`}>
      <div className="max-w-[900px] mx-auto border-x border-[#242426] h-0" />
    </div>
  );
};
