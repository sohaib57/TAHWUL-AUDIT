export type TrackingRow = {
  id: string
  code: string
  title: string
  owner: string
  dueDate: string
  progress: number
  status: 'Not Started' | 'In Progress' | 'Pending Review' | 'Completed' | 'Delayed'
  tags: string[]
}

export const trackingMock = {
  title: 'Evidence Tracking Center',
  rows: [
    {
      id: 't1',
      code: '5.4.1',
      title: 'Digital Transformation Strategic Planning',
      owner: 'Ahmed Khaled',
      dueDate: '2025-08-01',
      progress: 100,
      status: 'Completed',
      tags: ['Strategy', 'Planning'],
    },
    {
      id: 't2',
      code: '5.4.2',
      title: 'KPI Framework & Measurement',
      owner: 'Mona Hamed',
      dueDate: '2025-08-11',
      progress: 65,
      status: 'Pending Review',
      tags: ['KPIs'],
    },
    {
      id: 't3',
      code: '5.4.3',
      title: 'Roadmap & Initiative Portfolio',
      owner: 'Rami AlSharif',
      dueDate: '2025-08-20',
      progress: 40,
      status: 'In Progress',
      tags: ['Roadmap'],
    },
    {
      id: 't4',
      code: '6.1.1',
      title: 'Data Governance Policy',
      owner: 'Sarah Al-Khaled',
      dueDate: '2025-09-01',
      progress: 10,
      status: 'Delayed',
      tags: ['Data'],
    },
  ] satisfies TrackingRow[],
  activities: [
    { title: 'Evidence uploaded', subtitle: 'Roadmap_Version1.Docx', when: '5 mins ago' },
    { title: 'Review requested', subtitle: 'KPI Framework', when: '22 mins ago' },
    { title: 'Owner changed', subtitle: 'Assigned to Sarah Al-Khaled', when: '1 hour ago' },
  ],
}


