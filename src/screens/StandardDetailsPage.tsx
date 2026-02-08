import { useMemo, useState } from 'react'
import { Icon } from '../components/Icon.tsx'
import { standardDetailsMock } from '../mock/standardDetails.ts'
import { Link } from '../router/Link.tsx'
import './details.css'

type StandardDetailsPageProps = {
  standardId: string
}

type Leader = { name: string; role: string; initials: string; avatarUrl?: string }

function badgeClass(status: string) {
  if (status === 'Approved') return 'badge badgeSuccess'
  if (status === 'Pending Review') return 'badge badgeWarning'
  return 'badge badgeInfo'
}

export function StandardDetailsPage({ standardId }: StandardDetailsPageProps) {
  const data = useMemo(() => ({ ...standardDetailsMock, id: standardId }), [standardId])
  const [tab, setTab] = useState<'overview' | 'evidence'>('overview')
  const leaders = data.leaders as unknown as Leader[]

  return (
    <div className="page container">
      <div className="detailsTop">
        <div className="detailsCrumb">
          <Link to="/dashboard" className="detailsBack" aria-label="Back">
            <Icon name="arrowLeft" width={18} height={18} />
          </Link>
          <div className="detailsCrumbTitle">Digital Transformation Strategic Planning</div>
        </div>

        <div className="card detailsHero">
          <div className="detailsHeroMain">
            <span className="chip detailsChip">{data.category}</span>
            <div className="detailsTitle">{data.title}</div>
            <p className="detailsSub">{data.subtitle}</p>
          </div>

          <div className="detailsHeroRing" aria-label={`Progress ${data.progress}%`}>
            {(() => {
              const size = 92
              const strokeWidth = 10
              const r = (size - strokeWidth) / 2
              const c = 2 * Math.PI * r
              const offset = c * (1 - data.progress / 100)
              return (
                <div style={{ position: 'relative', width: size, height: size }}>
                  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={r}
                      stroke="#D9D9D9"
                      strokeWidth={strokeWidth}
                      fill="none"
                    />
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={r}
                      stroke="#1EA54E"
                      strokeWidth={strokeWidth}
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${c} ${c}`}
                      strokeDashoffset={offset}
                      transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 800,
                      fontSize: 16,
                      color: '#1D3557',
                    }}
                  >
                    {data.progress}%
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </div>

      <div className="summaryGrid">
        {(
          [
            ['Total Evidence', data.evidenceSummary.total, 'file' as const],
            ['Under Review Evidence', data.evidenceSummary.underReview, 'fileReview' as const],
            ['In Progress Evidence', data.evidenceSummary.inProgress, 'fileProgress' as const],
            ['Completed Evidence', data.evidenceSummary.completed, 'fileComplete' as const],
          ] as const
        ).map(([label, value, iconName]) => (
          <div className="card summaryCard" key={label}>
            <span className="summaryIcon" aria-hidden>
              <Icon name={iconName} width={20} height={20} />
            </span>
            <div>
              <div className="summaryValue">{value}</div>
              <div className="summaryLabel">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs" role="tablist" aria-label="Details tabs">
        <button
          className={tab === 'overview' ? 'tabBtn tabBtnActive' : 'tabBtn'}
          type="button"
          role="tab"
          aria-selected={tab === 'overview'}
          onClick={() => setTab('overview')}
        >
          Overview
        </button>
        <button
          className={tab === 'evidence' ? 'tabBtn tabBtnActive' : 'tabBtn'}
          type="button"
          role="tab"
          aria-selected={tab === 'evidence'}
          onClick={() => setTab('evidence')}
        >
          Evidence
        </button>
      </div>

      <div style={{ height: 16 }} />

      {tab === 'overview' ? (
        <>
          <div className="card cardPad overviewContainer">
            <div className="overviewRows">
              <div className="overviewDivider"></div>
              {data.overview.map((s) => (
                <div key={s.key} className="overviewPair">
                  <div className="overviewLabelCard">{s.label}</div>
                  <div className="overviewBodyCard">{s.content}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 16 }} />

          <div className="card cardPad">
            <div className="h1" style={{ marginBottom: 10 }}>
              Leaders
            </div>
            <div className="leadersRow">
              {leaders.map((l, idx) => (
                <div className="leaderCard" key={`${l.name}-${idx}`}>
                  <span className="leaderAvatar" aria-hidden>
                    {l.avatarUrl ? <img className="leaderAvatarImg" src={l.avatarUrl} alt="" /> : l.initials}
                  </span>
                  <div>
                    <div className="leaderName">{l.name}</div>
                    <div className="leaderRole">{l.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card cardPad">
            <div className="h1" style={{ marginBottom: 10 }}>
              Evidence Documents
            </div>
            <div className="detailsTableWrap">
              <table className="table detailsTable">
                <thead>
                  <tr>
                    <th>
                      <span className="thInner">
                        Document Number <Icon name="sort" width={12} height={12} />
                      </span>
                    </th>
                    <th>
                      <span className="thInner">
                        Document Name <Icon name="sort" width={12} height={12} />
                      </span>
                    </th>
                    <th>
                      <span className="thInner">
                        Document Lead <Icon name="sort" width={12} height={12} />
                      </span>
                    </th>
                    <th>
                      <span className="thInner">
                        Document Preparer <Icon name="sort" width={12} height={12} />
                      </span>
                    </th>
                    <th>
                      <span className="thInner">
                        Date <Icon name="sort" width={12} height={12} />
                      </span>
                    </th>
                    <th>
                      <span className="thInner">
                        Due Date <Icon name="sort" width={12} height={12} />
                      </span>
                    </th>
                    <th>
                      <span className="thInner">
                        Status <Icon name="sort" width={12} height={12} />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.evidenceDocs.map((doc) => (
                    <tr key={doc.number}>
                      <td>{doc.number}</td>
                      <td className="docNameCell">{doc.name}</td>
                      <td>{doc.lead}</td>
                      <td>{doc.preparer}</td>
                      <td>{doc.date}</td>
                      <td>{doc.dueDate}</td>
                      <td>
                        <span className={badgeClass(doc.status)}>{doc.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ height: 16 }} />

          <div className="detailsBottomGrid">
            <div className="card cardPad">
              <div className="h1" style={{ marginBottom: 12 }}>
                Comments
              </div>

              <div className="commentList">
                {data.comments.map((c) => (
                  <div className="commentCard" key={c.id}>
                    <div className="commentHeader">
                      <span className="commentAvatar" aria-hidden>
                        {c.initials}
                      </span>
                      <div className="commentAuthor">{c.author}</div>
                      <div className="commentDate">{c.date}</div>
                    </div>
                    <div className="commentText">{c.text}</div>
                  </div>
                ))}
              </div>

              <textarea className="commentInput" placeholder="Write a comment..." />
              <button className="btn commentBtn" type="button">
                <Icon name="send" width={16} height={16} />
                Post Comment
              </button>
            </div>

            <div className="card cardPad">
              <div className="h1 activityCardTitle">
                Recent Activities
              </div>

              <div className="activityList">
                {data.activities.map((a) => (
                  <div className="activityItem" key={`${a.title}-${a.when}`}>
                    <span className="activityDot" aria-hidden />
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
        </>
      )}
    </div>
  )
}


