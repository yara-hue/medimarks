import {
  Handshake, PenTool, Box, Wrench, CheckCircle, Truck,
  Ruler, ShieldCheck, Rocket, Cog, Paintbrush, Building2,
  HeartPulse, FlaskConical, Microscope, Lightbulb, Shield,
  Warehouse, Lamp, Sparkles, Zap, Settings, Package,
  Trees, Store, School, Award, FileCheck, HelpCircle,
  ArrowRight, UserCheck, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Handshake, PenTool, Box, Wrench, CheckCircle, Truck,
  Ruler, ShieldCheck, Rocket, Cog, Paintbrush, Building2,
  HeartPulse, FlaskConical, Microscope, Lightbulb, Shield,
  Warehouse, Lamp, Sparkles, Zap, Settings, Package,
  Trees, Store, School, Award, FileCheck, HelpCircle,
  ArrowRight, UserCheck, ClipboardList,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || HelpCircle;
}
