import { useMemo, useState } from 'react'
import { Icon } from '../components/Icon.tsx'
import { ProgressRing } from '../components/ui/ProgressRing.tsx'
import { trackingMock, type TrackingRow } from '../mock/tracking.ts'
import './tracking.css'

function statusBadge(status: TrackingRow['status']) {
  switch (status) {
    case 'Completed':
      return 'badge badgeSuccess'
    case 'Pending Review':
      return 'badge badgeWarning'
    case 'In Progress':
      return 'badge badgeInfo'
    case 'Delayed':
      return 'badge badgeDanger'
    case 'Not Started':
      return 'badge'
  }
}

export function TrackingPage() {
  const data = trackingMock
  const [selectedId, setSelectedId] = useState(data.rows[0]?.id ?? '')
  const selected = useMemo(
    () => data.rows.find((r) => r.id === selectedId) ?? data.rows[0],
    [data.rows, selectedId],
  )

  return (
    <div className="page container">
      <div className="trackingHeader">
        <div>
          <h1 className="h1">{data.title}</h1>
          <div className="muted" style={{ fontSize: 12, fontWeight: 700, marginTop: 2 }}>
            Track evidence readiness across standards with a structured table + summary
            side panel.
          </div>
        </div>
        <div className="filters">
          <span className="tag">
            <Icon name="filter" width={16} height={16} /> Filters
          </span>
          <span className="tag">My Items</span>
          <span className="tag">Pending Review</span>
        </div>
      </div>

      <div className="twoCol">
        <div className="card cardPad">
          <div className="h1" style={{ marginBottom: 10 }}>
            Standards & Evidence
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Owner</th>
                <th>Due Date</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  style={{
                    cursor: 'pointer',
                    background:
                      r.id === selectedId ? 'rgba(27, 98, 196, 0.06)' : undefined,
                  }}
                >
                  <td style={{ fontWeight: 900 }}>{r.code}</td>
                  <td>
                    <div className="rowTitle">{r.title}</div>
                    <div className="rowSub">{r.tags.join(' • ')}</div>
                  </td>
                  <td>{r.owner}</td>
                  <td>{r.dueDate}</td>
                  <td style={{ width: 180 }}>
                    <div className="progressBar" aria-label={`Progress ${r.progress}%`}>
                      <div
                        className="progressFill"
                        style={{
                          width: `${r.progress}%`,
                          background:
                            r.status === 'Delayed'
                              ? 'var(--danger)'
                              : r.status === 'Pending Review'
                                ? 'var(--warning)'
                                : r.status === 'In Progress'
                                  ? 'var(--info)'
                                  : 'var(--success)',
                        }}
                      />
                    </div>
                    <div className="muted" style={{ fontSize: 11, fontWeight: 900, marginTop: 4 }}>
                      {r.progress}%
                    </div>
                  </td>
                  <td>
                    <span className={statusBadge(r.status)}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid" style={{ gap: 16, alignContent: 'start' }}>
          <div className="card cardPad">
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
              <div className="sideTitle">Selected Standard</div>
              <ProgressRing value={selected?.progress ?? 0} size={70} strokeWidth={10} color="var(--success)" />
            </div>
            <div className="kv">
              <div className="k">Code</div>
              <div>{selected?.code}</div>
            </div>
            <div className="kv">
              <div className="k">Title</div>
              <div>{selected?.title}</div>
            </div>
            <div className="kv">
              <div className="k">Owner</div>
              <div>{selected?.owner}</div>
            </div>
            <div className="kv">
              <div className="k">Due Date</div>
              <div>{selected?.dueDate}</div>
            </div>
            <div className="kv">
              <div className="k">Status</div>
              <div>
                <span className={statusBadge((selected?.status ?? 'Not Started') as TrackingRow['status'])}>
                  {selected?.status}
                </span>
              </div>
            </div>
          </div>

          <div className="card cardPad">
            <div className="h1" style={{ marginBottom: 6 }}>
              Recent Activities
            </div>
            {data.activities.map((a) => (
              <div className="activityItem" key={`${a.title}-${a.when}`}>
                <span className="activityDot" style={{ background: 'var(--danger)' }} aria-hidden />
                <div style={{ minWidth: 0 }}>
                  <div className="activityTitle">{a.title}</div>
                  <div className="activitySub">{a.subtitle}</div>
                </div>
                <div className="activityWhen">{a.when}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


