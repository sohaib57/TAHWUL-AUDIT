export type EvidenceDoc = {
  number: string
  name: string
  lead: string
  preparer: string
  date: string
  dueDate: string
  status: 'Approved' | 'Pending Review' | 'In Progress'
}

export type CommentItem = {
  id: string
  author: string
  initials: string
  text: string
  date: string
}

export type ActivityItem = {
  title: string
  subtitle: string
  when: string
}

export type StandardDetails = {
  id: string
  category: string
  title: string
  subtitle: string
  progress: number
  evidenceSummary: { total: number; underReview: number; inProgress: number; completed: number }
  overview: Array<{ key: string; label: string; content: string }>
  leaders: Array<{ name: string; role: string; initials: string; avatarUrl: string }>
  evidenceDocs: EvidenceDoc[]
  comments: CommentItem[]
  activities: ActivityItem[]
}

export const standardDetailsMock: StandardDetails = {
  id: '5.4.1',
  category: 'Strategy & Planning',
  title: 'Digital Transformation Strategic Planning',
  subtitle:
    'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
  evidenceSummary: { total: 4, underReview: 3, inProgress: 2, completed: 1 },
  overview: [
    {
      key: 'objective',
      label: 'Objective',
      content:
        "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
    },
    {
      key: 'requirements',
      label: 'Implementation Requirements',
      content:
        "Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:\nA. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.\nB. Strategic Initiatives, Programs, And Performance Indicators.\nC. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.\nD. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.",
    },
    {
      key: 'evidence',
      label: 'Evidence Documents',
      content:
        'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    },
    {
      key: 'regs',
      label: 'Related Regulations',
      content: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    },
    { key: 'scope', label: 'Scope', content: 'All Government Entities.' },
  ],
  leaders: [
    {
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      initials: 'AA',
      avatarUrl: 'https://i.pravatar.cc/96?img=12',
    },
    {
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      initials: 'AA',
      avatarUrl: 'https://i.pravatar.cc/96?img=12',
    },
  ],
  evidenceDocs: [
    {
      number: '5.4.1.1',
      name: 'Digital_Transformation_Plan.Pdf',
      lead: 'Ahmed Khaled',
      preparer: 'Ahmed Khaled',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Approved',
    },
    {
      number: '5.4.1.2',
      name: 'KPI_Framework.Xlsx',
      lead: 'Mona Hamed',
      preparer: 'Mona Hamed',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review',
    },
    {
      number: '5.4.1.3',
      name: 'Roadmap_Version1.Docx',
      lead: 'Rami AlSharif',
      preparer: 'Rami AlSharif',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review',
    },
  ],
  comments: [
    {
      id: 'c1',
      author: 'Sara Ibrahim',
      initials: 'E',
      text: 'Ensure The Plan Includes A Clear Governance Model.',
      date: '2025-08-05',
    },
    {
      id: 'c2',
      author: 'Mona Hamed',
      initials: 'M',
      text: 'Ensure The Plan Includes A Clear Governance Model.',
      date: '2025-08-05',
    },
  ],
  activities: [
    {
      title: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
      subtitle: '',
      when: '5 Mins Ago',
    },
    {
      title: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
      subtitle: '',
      when: '20 Mins Ago',
    },
    {
      title: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
      subtitle: '',
      when: '1 Hour Ago',
    },
  ],
}


