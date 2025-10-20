import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: keyof typeof LucideIcons;
  label?: string;
  decorative?: boolean;
}

/**
 * Accessible icon wrapper component for lucide-react icons
 * 
 * @param name - The name of the lucide icon to render
 * @param label - Accessible label for screen readers (required unless decorative is true)
 * @param decorative - If true, icon is hidden from screen readers (use for purely decorative icons)
 * @param ...props - All other lucide-react icon props (size, color, strokeWidth, etc.)
 */
export function Icon({ name, label, decorative = false, ...props }: IconProps) {
  const LucideIcon = LucideIcons[name] as React.ComponentType<LucideProps>;
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  // If decorative, hide from screen readers
  if (decorative) {
    return <LucideIcon aria-hidden="true" {...props} />;
  }

  // If not decorative, require a label for accessibility
  if (!label) {
    console.warn(`Icon "${name}" requires a label prop for accessibility, or set decorative={true}`);
  }

  return (
    <LucideIcon 
      aria-label={label} 
      role="img"
      {...props} 
    />
  );
}

// Pre-defined icon sets for common use cases
export const NavigationIcons = {
  Home: 'Home',
  Map: 'Map',
  Search: 'Search',
  Menu: 'Menu',
  Close: 'X',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  ChevronDown: 'ChevronDown',
  ChevronUp: 'ChevronUp',
  ExternalLink: 'ExternalLink',
} as const;

export const TimelineIcons = {
  Calendar: 'Calendar',
  Clock: 'Clock',
  History: 'History',
  MapPin: 'MapPin',
  Milestone: 'Milestone',
  Timer: 'Timer',
} as const;

export const DocumentIcons = {
  FileText: 'FileText',
  File: 'File',
  FolderOpen: 'FolderOpen',
  Library: 'Library',
  BookOpen: 'BookOpen',
  Scroll: 'Scroll',
  Image: 'Image',
  Newspaper: 'Newspaper',
} as const;

export const CommunityIcons = {
  Users: 'Users',
  Home: 'Home',
  Building: 'Building',
  Building2: 'Building2',
  Landmark: 'Landmark',
  Church: 'Church',
  School: 'School',
  Factory: 'Factory',
  Store: 'Store',
  TreePine: 'TreePine',
  Warehouse: 'Warehouse',
  Tractor: 'Tractor',
} as const;

export const HistoricalIcons = {
  Tent: 'Tent',
  TreePine: 'TreePine',
  Wheat: 'Wheat',
  Factory: 'Factory',
  Train: 'Train',
  Landmark: 'Landmark',
  Church: 'Church',
  Library: 'Library',
  School: 'School',
  Tractor: 'Tractor',
} as const;

export const ActionIcons = {
  Download: 'Download',
  Share: 'Share2',
  BookmarkPlus: 'BookmarkPlus',
  Heart: 'Heart',
  Eye: 'Eye',
  Info: 'Info',
  AlertCircle: 'AlertCircle',
  CheckCircle: 'CheckCircle2',
} as const;

export const MapIcons = {
  Map: 'Map',
  MapPin: 'MapPin',
  Navigation: 'Navigation',
  Compass: 'Compass',
  Route: 'Route',
  Signpost: 'Signpost',
  Maximize2: 'Maximize2',
  ZoomIn: 'Plus',
  ZoomOut: 'Minus',
} as const;
