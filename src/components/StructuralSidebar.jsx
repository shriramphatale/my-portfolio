import React from 'react';

export default function StructuralSidebar() {
  const tabs = [
    { label: '01 / HERO', href: '#hero', color: 'bg-white hover:bg-volt text-black' },
    { label: '02 / ABOUT', href: '#about', color: 'bg-white hover:bg-volt text-black' },
    { label: '03 / SKILLS', href: '#skills', color: 'bg-white hover:bg-volt text-black' },
    { label: '04 / PROJECTS', href: '#projects', color: 'bg-white hover:bg-volt text-black' },
    { label: '05 / CONTACT', href: '#contact', color: 'bg-volt hover:bg-white text-black' },
  ];

  const handleTabClick = (e, href) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden 2xl:flex fixed right-0 top-20 bottom-0 z-40 flex-row bg-black border-l-4 border-black shadow-2xl">
      {tabs.map((tab, idx) => (
        <a
          key={idx}
          href={tab.href}
          onClick={(e) => handleTabClick(e, tab.href)}
          className={`w-14 border-r-4 border-black ${tab.color} transition-colors flex items-center justify-between py-8 cursor-pointer group`}
        >
          {/* Top Stamp */}
          <span className="font-mono text-xs font-bold writing-mode-vertical uppercase tracking-widest text-black/60 group-hover:text-black">
            SPEC_SYS
          </span>

          {/* Main Label */}
          <span className="font-mono text-sm font-extrabold writing-mode-vertical uppercase tracking-widest text-black">
            {tab.label}
          </span>

          {/* Bottom Dot */}
          <div className="w-3 h-3 bg-black border border-black rounded-none mx-auto mb-4" />
        </a>
      ))}
    </aside>
  );
}
