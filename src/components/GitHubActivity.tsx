import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface ActivityItem {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const MONOCHROME_THEME = {
  light: ['#ebedf0', '#d4d4d8', '#a1a1aa', '#52525b', '#18181b'],
  dark: ['#161618', '#2e2e32', '#52525b', '#9ca3af', '#fafafa'],
};

function formatActivityDate(dateString: string): string {
  try {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export const GitHubActivity: React.FC = () => {
  const { isDark } = useTheme();
  const [totalContributions, setTotalContributions] = useState<number>(441);
  const [hoveredDay, setHoveredDay] = useState<{
    activity: ActivityItem;
    x: number;
    y: number;
  } | null>(null);

  const activeColorScale = isDark ? MONOCHROME_THEME.dark : MONOCHROME_THEME.light;

  const handleTransformData = (data: ActivityItem[]): ActivityItem[] => {
    const total = data.reduce((acc, curr) => acc + curr.count, 0);
    if (total > 0 && total !== totalContributions) {
      setTotalContributions(total);
    }
    return data;
  };

  return (
    <section id="github-activity" className="w-full">
      {/* Structural Section Header Bar (aligned with portfolio section headings) */}
      <div className="w-full border-b border-[#242426]">
  <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] pt-5 pb-6 px-6 md:px-8">
    <div className="flex flex-wrap items-baseline justify-between gap-4">
      <div className="flex items-baseline gap-3">
        {/* Uncomment the 2 spans below only if you want a section number like "04 —" */}
        <span className="font-mono text-sm md:text-base text-[#71717a] font-medium tracking-tight">05</span>
        <span className="text-zinc-600 font-light select-none">—</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#fafafa] tracking-tight">
          GitHub Activity
        </h2>
      </div>
      <span className="text-xs md:text-sm text-zinc-400 font-mono">
        {totalContributions.toLocaleString()} GitHub activities in the last year
      </span>
    </div>
  </div>
</div>

      {/* Structural Content Grid (Sitting flush inside main vertical rails) */}
      <div className="w-full">
        <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full space-y-4"
          >
            {/* Heatmap Area: 100% full width, no horizontal scrollbar, fluid SVG scaling, top padding to prevent label clipping */}
            <div className="w-full flex justify-center pt-2.5 pb-1 text-zinc-500 overflow-visible [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full [&_svg]:overflow-visible">
              <GitHubCalendar
                username="shriramphatale"
                year="last"
                colorScheme={isDark ? 'dark' : 'light'}
                theme={MONOCHROME_THEME}
                blockSize={11}
                blockMargin={3}
                blockRadius={3}
                showWeekdayLabels={false}
                showColorLegend={false}
                showTotalCount={false}
                transformData={handleTransformData}
                renderBlock={(block, activity) => {
                  return React.cloneElement(block, {
                    className: `${block.props.className || ''} transition-opacity duration-150 hover:opacity-75 cursor-pointer`,
                    onMouseEnter: (e: React.MouseEvent<SVGRectElement>) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredDay({
                        activity: activity as ActivityItem,
                        x: rect.left + rect.width / 2,
                        y: rect.top,
                      });
                    },
                    onMouseLeave: () => {
                      setHoveredDay(null);
                    },
                  });
                }}
                labels={{
                  months: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ],
                }}
              />
            </div>

            {/* Footer / Legend Row */}
            <div className="flex items-center justify-between text-xs text-zinc-500 pt-4 border-t border-[#242426] font-mono">
              <span>Less active</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  {activeColorScale.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-3 h-3 rounded-[3px] border border-zinc-300 dark:border-zinc-800/80 transition-colors duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>More active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Theme-Aware High-Contrast Tooltip */}
      {hoveredDay && (
        <div
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full transition-all duration-75"
          style={{
            left: `${hoveredDay.x}px`,
            top: `${hoveredDay.y - 8}px`,
          }}
        >
          <div
            className={`relative text-xs px-2.5 py-1 rounded shadow-xl whitespace-nowrap font-mono select-none transition-colors ${
              isDark
                ? 'bg-zinc-900 text-zinc-100 border border-zinc-700'
                : 'bg-zinc-900 text-white border border-zinc-800 shadow-lg'
            }`}
          >
            <span>
              {hoveredDay.activity.count === 0
                ? `No activities on ${formatActivityDate(hoveredDay.activity.date)}`
                : `${hoveredDay.activity.count} ${
                    hoveredDay.activity.count === 1 ? 'activity' : 'activities'
                  } on ${formatActivityDate(hoveredDay.activity.date)}`}
            </span>
            {/* Subtle pointer arrow */}
            <div
              className={`absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 rotate-45 ${
                isDark
                  ? 'bg-zinc-900 border-r border-b border-zinc-700'
                  : 'bg-zinc-900 border-r border-b border-zinc-800'
              }`}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GitHubActivity;
