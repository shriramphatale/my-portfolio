import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Search, Hash, ExternalLink, Copy, Check, X, CornerDownLeft, Terminal } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Navigation' | 'Projects' | 'Actions';
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const { personal, navigation, projects } = portfolioConfig;
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global key listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open through window or callback if needed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items: CommandItem[] = [
    // Navigation
    ...navigation.map((nav) => ({
      id: `nav-${nav.label}`,
      title: `Jump to ${nav.label}`,
      subtitle: `Scroll to ${nav.label} section`,
      category: 'Navigation' as const,
      icon: <Hash className="w-4 h-4 text-zinc-400" />,
      action: () => {
        onClose();
        const el = document.querySelector(nav.href);
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    })),
    // Projects
    ...projects.map((proj) => ({
      id: `proj-${proj.id}`,
      title: proj.title,
      subtitle: proj.tagline,
      category: 'Projects' as const,
      icon: <Terminal className="w-4 h-4 text-sky-400" />,
      action: () => {
        onClose();
        const el = document.getElementById(proj.id);
        el?.scrollIntoView({ behavior: 'smooth' });
      },
    })),
    // Actions
    {
      id: 'action-email',
      title: 'Copy Email Address',
      subtitle: personal.email,
      category: 'Actions' as const,
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />,
      action: () => {
        navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      },
    },
    {
      id: 'action-github',
      title: 'Open GitHub Profile',
      subtitle: 'View repositories and open-source contributions',
      category: 'Actions' as const,
      icon: <ExternalLink className="w-4 h-4 text-zinc-400" />,
      action: () => {
        window.open(personal.githubUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'action-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect with Shriram Phatale',
      category: 'Actions' as const,
      icon: <ExternalLink className="w-4 h-4 text-zinc-400" />,
      action: () => {
        window.open(personal.linkedinUrl, '_blank');
        onClose();
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-[#27272a] bg-[#0c0c0e] shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#242426] bg-[#121215]">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-zinc-900">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-zinc-500 font-mono">
              No matching commands or sections found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    isSelected
                      ? 'bg-zinc-800 text-white'
                      : 'text-zinc-300 hover:bg-zinc-850'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-1.5 rounded border ${
                        isSelected
                          ? 'border-zinc-700 bg-zinc-900 text-white'
                          : 'border-zinc-800 bg-[#16161a] text-zinc-400'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-medium text-white flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase px-1.5 py-0.2 bg-zinc-900 rounded border border-zinc-800">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <CornerDownLeft className="w-3.5 h-3.5 text-zinc-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-[#242426] bg-[#090909] flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Shriram Phatale Portfolio</span>
        </div>
      </div>
    </div>
  );
};
