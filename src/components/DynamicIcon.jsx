import React from 'react';
import {
  Coffee,
  Code2,
  Database,
  Layout,
  Layers,
  Server,
  Boxes,
  Palette,
  Send,
  HardDrive,
  Cpu,
  Box,
  GitBranch,
  Terminal,
  Cloud,
  Package,
  CheckCircle2,
  Network,
  Zap,
  Code,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Coffee,
  Code2,
  Database,
  Layout,
  Layers,
  Server,
  Boxes,
  Palette,
  Send,
  HardDrive,
  Cpu,
  Box,
  GitBranch,
  Terminal,
  Cloud,
  Package,
  CheckCircle2,
  Network,
  Zap,
  Code,
  Atom: Code2, // Fallback for Atom if needed
  Sparkles
};

export default function DynamicIcon({ name, className = "w-5 h-5", ...props }) {
  const IconComponent = iconMap[name] || Code;
  return <IconComponent className={className} {...props} />;
}
