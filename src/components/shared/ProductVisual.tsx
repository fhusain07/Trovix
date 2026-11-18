import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  Circle,
  Command,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Users,
  Workflow,
} from "lucide-react";

export function ProductVisual() {
  return (
    <div className="product-stage">
      <div className="product-glow" aria-hidden="true" />
      <div
        className="product-window"
        role="img"
        aria-label="Illustrative CRM interface with fictional pipeline sample data"
      >
        <div className="window-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>workspace.trovix / overview</span>
          <span className="sample-label">INTERFACE CONCEPT</span>
        </div>
        <div className="workspace">
          <aside className="workspace-sidebar" aria-hidden="true">
            <div className="workspace-brand">
              <Command size={18} />
              <strong>workspace</strong>
            </div>
            <div className="workspace-team">
              <span>T</span> Your workspace <ChevronDown size={11} />
            </div>
            <small>WORKSPACE</small>
            {[
              [LayoutDashboard, "Overview"],
              [Users, "Customers"],
              [Workflow, "Pipeline"],
              [Circle, "Activity"],
            ].map(([Icon, name], index) => {
              const ItemIcon = Icon as typeof Circle;
              return (
                <div
                  className={index === 0 ? "selected" : ""}
                  key={String(name)}
                >
                  <ItemIcon size={13} />
                  {String(name)}
                </div>
              );
            })}
            <div className="workspace-settings">
              <Settings size={13} />
              Settings
            </div>
            <div className="workspace-user">
              <span>JD</span>
              <div>
                Jamie Doe<small>Workspace admin</small>
              </div>
            </div>
          </aside>
          <div className="workspace-content" aria-hidden="true">
            <div className="workspace-top">
              <span>
                Workspace <span>/ Overview</span>
              </span>
              <div>
                <Search size={13} />
                <Bell size={13} />
                <span className="mini-avatar">JD</span>
              </div>
            </div>
            <div className="dashboard-heading">
              <div>
                <span>YOUR BUSINESS, AT A GLANCE</span>
                <h3>A little clarity goes a long way.</h3>
              </div>
              <span className="dashboard-add">
                <Plus size={12} />
                Add lead
              </span>
            </div>
            <div className="dashboard-stats">
              {[
                ["Pipeline value", "₹ 8,42,000", "Sample forecast"],
                ["Active leads", "128", "Across your pipeline"],
                ["Won this month", "24", "Sample opportunities"],
              ].map(([label, value, note]) => (
                <div key={label}>
                  <span>
                    {label}
                    <ArrowUpRight size={12} />
                  </span>
                  <strong>{value}</strong>
                  <small>{note}</small>
                </div>
              ))}
            </div>
            <div className="dashboard-chart">
              <div>
                <strong>Pipeline performance</strong>
                <span>
                  This month <ChevronDown size={10} />
                </span>
              </div>
              <div className="chart-area">
                <div className="chart-labels">
                  <span>80k</span>
                  <span>60k</span>
                  <span>40k</span>
                  <span>20k</span>
                </div>
                <svg viewBox="0 0 460 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--brand-gold))" stopOpacity=".26" />
                      <stop offset="100%" stopColor="hsl(var(--brand-gold))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[20, 55, 90, 125].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="460"
                      y2={y}
                      stroke="currentColor"
                      strokeDasharray="3 5"
                    />
                  ))}
                  <path
                    d="M0 120 C30 120 28 82 65 91 S100 110 133 79 S165 105 195 68 S225 87 260 53 S290 74 322 37 S360 61 390 22 S428 38 460 7 L460 140 L0 140Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 120 C30 120 28 82 65 91 S100 110 133 79 S165 105 195 68 S225 87 260 53 S290 74 322 37 S360 61 390 22 S428 38 460 7"
                    className="chart-reveal-line"
                    pathLength={1}
                    stroke="hsl(var(--brand-gold))"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="chart-months">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
            <div className="pipeline-heading">
              <strong>Recent opportunities</strong>
              <MoreHorizontal size={17} />
            </div>
            <div className="demo-table">
              {[
                ["Website inquiry", "Discovery", "₹ 45,000"],
                ["Platform enquiry", "Proposal", "₹ 1,20,000"],
                ["Operations tool", "In progress", "₹ 80,000"],
              ].map(([name, status, value], index) => (
                <div key={name}>
                  <span className={`opportunity-icon opportunity-${index}`}>
                    {name.slice(0, 1)}
                  </span>
                  <strong>{name}</strong>
                  <span className="opportunity-status">{status}</span>
                  <span>{value}</span>
                  <MoreHorizontal size={12} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="product-float">
        <span>
          <Workflow size={19} />
        </span>
        <div>
          Built around your workflow.
          <small>Designed to move you forward.</small>
        </div>
        <span className="float-status" />
      </div>
      <p className="visual-caption">
        A glimpse of what’s possible. Illustrative interface, sample data.
      </p>
    </div>
  );
}
