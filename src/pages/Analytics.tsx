import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign,
  Eye,
  Play,
  MousePointer,
  TrendingUp,
  TrendingDown,
  Calendar,
  Edit3,
  Save,
  X
} from "lucide-react";
import { Navigation } from "@/components/Navigation";

interface MetricsData {
  cost: number;
  impressions: number;
  views: number;
  websiteVisits: number;
  lastUpdated: string;
  campaignName: string;
  dateRange: string;
}

const defaultMetrics: MetricsData = {
  cost: 0,
  impressions: 0,
  views: 0,
  websiteVisits: 0,
  lastUpdated: new Date().toISOString(),
  campaignName: "Cre8tive AI Studios - YouTube Promotion",
  dateRange: "Last 30 days"
};

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend?: number;
  color: string;
  prefix?: string;
  suffix?: string;
  isEditing: boolean;
  onValueChange?: (value: string) => void;
  rawValue: number;
}

const MetricCard = ({
  icon: Icon,
  label,
  value,
  trend,
  color,
  prefix = "",
  suffix = "",
  isEditing,
  onValueChange,
  rawValue
}: MetricCardProps) => {
  const [editValue, setEditValue] = useState(rawValue.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEditValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <motion.div
      className="glass-card-medium p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
      whileHover={!isEditing ? { scale: 1.02, y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-xl"
            style={{ background: `${color}20` }}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color }} />
          </div>
          <h3 className="text-white/60 text-xs md:text-sm font-semibold uppercase tracking-wider">
            {label}
          </h3>
        </div>
        {trend !== undefined && trend !== 0 && !isEditing && (
          <div className={`flex items-center gap-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="text-sm font-bold">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>

      {/* Value */}
      {isEditing ? (
        <div className="flex items-center gap-2">
          {prefix && <span className="text-2xl md:text-3xl font-black text-white/60">{prefix}</span>}
          <input
            type="number"
            value={editValue}
            onChange={handleChange}
            className="bg-white/5 border border-cyan-400/50 rounded-lg px-4 py-2 text-2xl md:text-4xl font-black text-white w-full focus:outline-none focus:border-cyan-400"
            placeholder="0"
          />
          {suffix && <span className="text-2xl md:text-3xl font-black text-white/60">{suffix}</span>}
        </div>
      ) : (
        <p className="text-3xl md:text-5xl font-black text-white mb-2">
          {prefix}{value}{suffix}
        </p>
      )}

      {/* Subtext */}
      <p className="text-white/40 text-xs md:text-sm">
        {isEditing ? "Enter new value" : "Total accumulated"}
      </p>
    </motion.div>
  );
};

const Analytics = () => {
  const [metrics, setMetrics] = useState<MetricsData>(defaultMetrics);
  const [isEditing, setIsEditing] = useState(false);
  const [tempMetrics, setTempMetrics] = useState<MetricsData>(defaultMetrics);

  // Load metrics from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cre8tive_analytics_metrics');
    if (saved) {
      const parsed = JSON.parse(saved);
      setMetrics(parsed);
      setTempMetrics(parsed);
    }
  }, []);

  // Save metrics to localStorage
  const saveMetrics = () => {
    const updated = {
      ...tempMetrics,
      lastUpdated: new Date().toISOString()
    };
    setMetrics(updated);
    localStorage.setItem('cre8tive_analytics_metrics', JSON.stringify(updated));
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setTempMetrics(metrics);
    setIsEditing(false);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const formatCurrency = (num: number): string => {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Calculate derived metrics
  const ctr = metrics.impressions > 0
    ? ((metrics.websiteVisits / metrics.impressions) * 100).toFixed(2)
    : '0.00';

  const viewRate = metrics.impressions > 0
    ? ((metrics.views / metrics.impressions) * 100).toFixed(2)
    : '0.00';

  const costPerVisit = metrics.websiteVisits > 0
    ? (metrics.cost / metrics.websiteVisits).toFixed(2)
    : '0.00';

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(6,182,212,0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 80% 80%, rgba(59,130,246,0.15) 0%, transparent 50%)',
          filter: 'blur(100px)'
        }}
      />

      <Navigation />

      <main className="relative pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black gradient-text mb-3">
                  Analytics Dashboard
                </h1>
                <p className="text-lg md:text-xl text-white/70">
                  {metrics.campaignName}
                </p>
              </div>

              {/* Edit Button */}
              <div className="flex items-center gap-3">
                <AnimatePresence mode="wait">
                  {isEditing ? (
                    <motion.div
                      key="editing"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex gap-3"
                    >
                      <button
                        onClick={cancelEdit}
                        className="px-6 py-3 rounded-full glass-card-medium border border-red-400/30 hover:border-red-400/50 text-white font-bold text-sm transition-all duration-300 flex items-center gap-2"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                      <button
                        onClick={saveMetrics}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-glow-lg"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="not-editing"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-3 rounded-full glass-card-medium border border-cyan-400/30 hover:border-cyan-400/50 text-white font-bold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
                    >
                      <Edit3 className="w-4 h-4" />
                      Update Metrics
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Date Range & Last Updated */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{metrics.dateRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Last updated: {formatDate(metrics.lastUpdated)}</span>
              </div>
            </div>
          </motion.div>

          {/* Main Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <MetricCard
              icon={DollarSign}
              label="Total Cost"
              value={formatCurrency(isEditing ? tempMetrics.cost : metrics.cost)}
              color="#10B981"
              prefix="$"
              isEditing={isEditing}
              rawValue={tempMetrics.cost}
              onValueChange={(val) => setTempMetrics({ ...tempMetrics, cost: parseFloat(val) || 0 })}
            />
            <MetricCard
              icon={Eye}
              label="Impressions"
              value={formatNumber(isEditing ? tempMetrics.impressions : metrics.impressions)}
              color="#06B6D4"
              isEditing={isEditing}
              rawValue={tempMetrics.impressions}
              onValueChange={(val) => setTempMetrics({ ...tempMetrics, impressions: parseInt(val) || 0 })}
            />
            <MetricCard
              icon={Play}
              label="Video Views"
              value={formatNumber(isEditing ? tempMetrics.views : metrics.views)}
              color="#3B82F6"
              isEditing={isEditing}
              rawValue={tempMetrics.views}
              onValueChange={(val) => setTempMetrics({ ...tempMetrics, views: parseInt(val) || 0 })}
            />
            <MetricCard
              icon={MousePointer}
              label="Website Visits"
              value={formatNumber(isEditing ? tempMetrics.websiteVisits : metrics.websiteVisits)}
              color="#8B5CF6"
              isEditing={isEditing}
              rawValue={tempMetrics.websiteVisits}
              onValueChange={(val) => setTempMetrics({ ...tempMetrics, websiteVisits: parseInt(val) || 0 })}
            />
          </div>

          {/* Secondary Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {/* CTR */}
            <div className="glass-card-medium p-6 rounded-2xl border border-white/5">
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                Click-Through Rate
              </h4>
              <p className="text-3xl font-black text-white mb-1">{ctr}%</p>
              <p className="text-white/40 text-xs">Visits / Impressions</p>
            </div>

            {/* View Rate */}
            <div className="glass-card-medium p-6 rounded-2xl border border-white/5">
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                View Rate
              </h4>
              <p className="text-3xl font-black text-white mb-1">{viewRate}%</p>
              <p className="text-white/40 text-xs">Views / Impressions</p>
            </div>

            {/* Cost Per Visit */}
            <div className="glass-card-medium p-6 rounded-2xl border border-white/5">
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                Cost Per Visit
              </h4>
              <p className="text-3xl font-black text-white mb-1">${costPerVisit}</p>
              <p className="text-white/40 text-xs">Average cost per website visit</p>
            </div>
          </motion.div>

          {/* Help Text */}
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 glass-card-medium p-6 rounded-2xl border border-cyan-400/30"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400"></div>
                <div>
                  <h4 className="text-white font-bold mb-2">Update Instructions</h4>
                  <p className="text-white/70 text-sm">
                    Enter the latest metrics from your YouTube Studio promotion tab.
                    Click "Save Changes" when done, or "Cancel" to discard changes.
                    All calculated metrics (CTR, View Rate, Cost Per Visit) will update automatically.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Analytics;
