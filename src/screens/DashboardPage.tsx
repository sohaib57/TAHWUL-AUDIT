import { dashboardMock } from '../mock/dashboard.ts'
import { BarChart } from '../components/ui/BarChart.tsx'
import { SemiCircularProgress } from '../components/ui/SemiCircularProgress.tsx'
import { CountUp } from '../components/ui/CountUp.tsx'
import { AnimatedProgress } from '../components/ui/AnimatedProgress.tsx'
import { Icon } from '../components/Icon.tsx'
import chartBarLine from '../assets/images/hugeicons_chart-bar-line.png'
import files01 from '../assets/images/hugeicons_files-01.png'
import fileVerified from '../assets/images/hugeicons_file-verified.png'
import folder01 from '../assets/images/hugeicons_folder-01.png'
import folderCheck from '../assets/images/hugeicons_folder-check.png'
import fileUpload from '../assets/images/hugeicons_file-upload.png'
import './dashboard.css'

const statImageMap: Record<string, string> = {
  'Overall Progress': chartBarLine,
  'Total Criteria': files01,
  'Completed Criteria': fileVerified,
  'Evidence Documents': folder01,
  'Evidence (Completed)': folderCheck,
  'Uploaded To DGA': fileUpload,
}

function getStatImage(label: string): string {
  return statImageMap[label] || ''
}

type Status =
  | 'completed'
  | 'inProgress'
  | 'partial'
  | 'warning'
  | 'delayed'
  | 'notStarted'
  | 'fullyUploaded'

function statusColor(status: Status) {
  switch (status) {
    case 'completed':
      return '#1aa34a'
    case 'inProgress':
      return '#f2b01e'
    case 'partial':
      return '#1D3557'
    case 'warning':
      return '#f2b01e'
    case 'delayed':
      return '#DB1F26'
    case 'notStarted':
      return '#8597A8'
    case 'fullyUploaded':
      return '#2b8cff'
    default:
      return '#8597A8'
  }
}


export function DashboardPage() {
  const d = dashboardMock

  return (
    <div className="page container">
      <div className="card timelineWrap">
        <div className="timelineHeader">
          <div className="h1">Project Timeline</div>
          <div className="yearSelect">
            {d.year}
            <Icon name="chevronDown" width={16} height={16} />
          </div>
        </div>
        <div className="timelineBar" aria-hidden>
          <AnimatedProgress 
            value={33.33} 
            duration={1500}
            className="timelineFill"
          />
          {d.timeline.map((m, idx) => {
            const isInGreenSection = idx < 2
            const dotColor = isInGreenSection ? '#FFFFFF' : 'var(--danger)'
            const position = ((idx + 0.5) / d.timeline.length) * 100
            return (
              <div
                key={`${m.date}-${m.title}`}
                className="mileDot"
                style={{
                  background: dotColor,
                  left: `${position}%`,
                }}
              />
            )
          })}
        </div>
        <div className="milestones">
          {d.timeline.map((m) => (
            <div key={`${m.date}-${m.title}`} className="milestone">
              <div className="mileDate">
                {m.date}
              </div>
              <div className="mileTitle">
                {m.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 12 }} />

      <div className="statGrid">
        {d.stats.map((s) => (
          <div
            key={s.label}
            className="card statCard"
          >
            <div className="statValueRow">
              <div className="statValue">
                {s.value.toString().includes('%') ? (
                  <CountUp value={s.value} duration={1500} decimals={s.value.toString().includes('.') ? 2 : 0} />
                ) : (
                  <CountUp value={s.value} duration={1500} decimals={0} />
                )}
              </div>
              <span className="statIconBox" aria-hidden>
                {s.image ? (
                  <img src={getStatImage(s.label)} alt={s.label} className="statIconImage" />
                ) : (
                  <Icon name={s.icon} width={18} height={18} />
                )}
              </span>
            </div>
            <div className="statLabel">{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ height: 16 }} />

      <div className="card progressStatusCard">
        <div className="progressHeader">
          <div className="h1">Progress Status</div>
          <div className="legend" aria-label="Legend">
            {(
              [
                ['Not Started', '#8597A8'],
                ['In Progress', '#f2b01e'],
                ['Completed', '#1aa34a'],
                ['Partially Uploaded', '#1D3557'],
                ['Fully Uploaded', '#2b8cff'],
                ['Delayed', '#DB1F26'],
              ] as const
            ).map(([label, col]) => (
              <div key={label} className="legendItem">
                <span className="legendDot" style={{ background: col }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="perspectiveGrid">
          {d.perspectives.map((p) => (
            <div key={p.name} className="perspectiveColWrapper">
              <div className="perspectiveCol">
                <div className="pTitle">{p.name}</div>
                <div className="pPct">
                  <CountUp value={p.percent} duration={1500} decimals={2} suffix="%" />
                </div>
              </div>
              {p.standards.map((s) => (
                <div key={`${p.name}-${s.name}`} className="standardCard">
                  <div className="stdName">{s.name}</div>
                  <div className="statusRow">
                    {s.statuses.map((st, idx) => (
                      <span
                        key={`${s.name}-${idx}`}
                        className="statusDot"
                        style={{ background: statusColor(st as Status) }}
                        title={st}
                      >
                        {idx + 1}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 16 }} />

      <div className="gridBottom">
        <div className="card cardPad">
          <div className="h1 complianceTitle">
            Overall Compliance Score
          </div>
          <div className="complianceGaugeWrap">
            <SemiCircularProgress
              value={d.compliance.value}
              color="#DB1F26"
              size={240}
              strokeWidth={18}
              trackColor="#E0E8ED"
              strokeLinecap="round"
            />
            <div className="complianceText">
              <div className="complianceValue">
                <CountUp value={d.compliance.value} duration={1500} decimals={0} suffix="%" />
              </div>
              <div className="complianceLabel">{d.compliance.label}</div>
            </div>
          </div>
        </div>

        <div className="card cardPad">
          <div className="h1 leaderSectionTitle">
            Top Performing Perspective Leaders
          </div>
          {d.leaders.map((l) => (
            <div className="leaderRow" key={l.name}>
              <span className="avatar" aria-hidden>
                {(l as { avatarUrl?: string }).avatarUrl ? (
                  <img
                    src={(l as { avatarUrl?: string }).avatarUrl}
                    alt=""
                    style={{ width: '100%', height: '100%', borderRadius: '999px', objectFit: 'cover' }}
                  />
                ) : (
                  l.name
                    .split(' ')
                    .slice(0, 2)
                    .map((x) => x[0])
                    .join('')
                    .toUpperCase()
                )}
              </span>
              <div style={{ minWidth: 0 }}>
                <div className="leaderName">{l.name}</div>
                <div className="leaderRole">{l.role}</div>
              </div>
              <div className="leaderScore">
                <CountUp value={l.score} duration={1500} decimals={0} suffix="%" />
              </div>
            </div>
          ))}
        </div>

        <div className="card cardPad activityCard">
          <div className="h1 activityCardTitle">
            Recent Activities
          </div>
          {d.activities.map((a) => (
            <div className="activityItem" key={`${a.title}-${a.when}`}>
              <span
                className="activityDot"
                style={{ background: '#DB1F26' }}
                aria-hidden
              />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="activityTitle">{a.title}</div>
                {a.subtitle && <div className="activitySub">{a.subtitle}</div>}
              </div>
              <div className="activityWhen">{a.when}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 16 }} />

      <div className="gridBottom gridBottomWide">
        <div className="card cardPad">
          <div className="h1" style={{ marginBottom: 10 }}>
            12-Month Performance
          </div>
          <div className="chartWrap">
            <BarChart
              data={d.monthlyPerformance.map((x) => ({
                label: x.month, 
                value: x.value,
              }))}
            />
            <svg
              width="100%"
              height="20"
              viewBox="0 0 1200 20"
              preserveAspectRatio="none"
              style={{ display: 'block', marginTop: 0 }}
            >
              {d.monthlyPerformance.map((x, idx) => {
                const totalWidth = 1200 - 80
                const barW = totalWidth / d.monthlyPerformance.length
                const barWidth = barW * 0.65
                const barSpacing = barW * 0.35
                const xPos = 40 + (idx * barW) + (barSpacing / 2)
                return (
                  <text
                    key={x.month}
                    x={xPos + barWidth / 2}
                    y={14}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#8597A8"
                    fontWeight="400"
                    fontFamily="'Cairo', system-ui, -apple-system, sans-serif"
                  >
                    {x.month}
                  </text>
                )
              })}
            </svg>
          </div>
        </div>

        <div className="card cardPad">
          <div className="h1" style={{ marginBottom: 10 }}>
            Audit Readiness
          </div>
          <div className="auditGaugeWrap">
            <SemiCircularProgress
              value={d.auditReadiness.value}
              color="var(--success)"
              size={280}
              strokeWidth={20}
              trackColor="#E0E8ED"
              strokeLinecap="round"
            />
            <div className="auditText">
              <div className="auditValue">
                <CountUp value={d.auditReadiness.value} duration={1500} decimals={0} suffix="%" />
              </div>
              <div className="auditLabel">Readiness Level</div>
            </div>
          </div>
          <div className="auditDivider" />
          <div className="auditMetrics">
            <div className="auditMetric">
              <div className="auditMetricValue">
                <CountUp value={d.auditReadiness.overdue} duration={1500} decimals={0} />
              </div>
              <div className="auditMetricLabel">Overdue Stds</div>
            </div>
            <div className="auditMetric">
              <div className="auditMetricValue">
                <CountUp value={d.auditReadiness.missingEvidence} duration={1500} decimals={0} />
              </div>
              <div className="auditMetricLabel">Missing Evidence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


