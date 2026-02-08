export type TimelineMilestone = {
  date: string
  title: string
  state: 'done' | 'current' | 'todo' | 'delayed'
}

export type ActivityItem = {
  title: string
  subtitle: string
  when: string
  color: 'info' | 'danger' | 'success' | 'warning'
}

export const dashboardMock = {
  year: 2026,
  timeline: [
    { date: 'Mar 17', title: 'Kickoff Workshop', state: 'done' },
    { date: 'March 18', title: 'Data Collection', state: 'done' },
    { date: 'May 8', title: 'Initial Phase', state: 'done' },
    { date: 'May 9-July 12', title: 'Verification', state: 'done' },
    { date: 'July 13', title: 'Completion Reviews', state: 'delayed' },
    { date: 'August 21', title: 'Cycle Conclusion', state: 'delayed' },
  ] satisfies TimelineMilestone[],
  stats: [
    { label: 'Overall Progress', value: '78.65%', icon: 'barChart' as const, image: '/src/assets/images/hugeicons_chart-bar-line.png' },
    { label: 'Total Criteria', value: '95', icon: 'file' as const, image: '/src/assets/images/hugeicons_files-01.png' },
    { label: 'Completed Criteria', value: '52', icon: 'fileComplete' as const, image: '/src/assets/images/hugeicons_file-verified.png' },
    { label: 'Evidence Documents', value: '386', icon: 'file' as const, image: '/src/assets/images/hugeicons_folder-01.png' },
    { label: 'Evidence (Completed)', value: '302', icon: 'fileComplete' as const, image: '/src/assets/images/hugeicons_folder-check.png' },
    { label: 'Uploaded To DGA', value: '258', icon: 'upload' as const, image: '/src/assets/images/hugeicons_file-upload.png' },
  ],
  perspectives: [
    {
      name: 'Strategy And Planning',
      percent: 97.78,
      standards: [
        { name: 'Digital Transformation', statuses: ['completed', 'completed', 'completed'] },
        { name: 'Digital Governance', statuses: ['completed', 'completed', 'inProgress'] },
        { name: 'Enterprise Architecture', statuses: ['completed', 'completed', 'completed', 'completed'] },
      ],
    },
    {
      name: 'Organization And Culture',
      percent: 70.83,
      standards: [
        { name: 'Digital Culture And Environment', statuses: ['completed', 'inProgress', 'inProgress'] },
        { name: 'Leadership Development', statuses: ['completed', 'completed', 'completed', 'completed'] },
        { name: 'Skills & Capacity Building', statuses: ['inProgress', 'inProgress', 'inProgress'] },
      ],
    },
    {
      name: 'Operations And Execution',
      percent: 80,
      standards: [{ name: 'Business Processes', statuses: ['completed', 'inProgress', 'inProgress', 'inProgress'] }],
    },
    {
      name: 'Business Continuity',
      percent: 90.59,
      standards: [
        { name: 'Risk Management', statuses: ['completed', 'completed', 'completed', 'completed', 'completed'] },
        { name: 'Business Continuity', statuses: ['completed', 'completed', 'completed', 'completed', 'completed', 'completed', 'completed'] },
      ],
    },
    {
      name: 'Information Technology',
      percent: 75,
      standards: [
        { name: 'Support Systems', statuses: ['fullyUploaded', 'fullyUploaded', 'fullyUploaded', 'partial', 'partial'] },
        { name: 'IT Infrastructure', statuses: ['completed', 'completed', 'completed', 'completed', 'partial', 'partial', 'completed'] },
        { name: 'Cloud Infrastructure', statuses: ['completed', 'completed', 'fullyUploaded'] },
      ],
    },
    {
      name: 'Comprehensive Governance',
      percent: 64.44,
      standards: [
        { name: 'Governance Platforms', statuses: ['completed', 'completed', 'completed', 'completed', 'completed', 'completed', 'completed', 'completed', 'completed'] },
      ],
    },
    {
      name: 'Channels And Services',
      percent: 100,
      standards: [
        { name: 'Service Quality', statuses: ['completed', 'completed', 'completed'] },
        { name: 'Digital Channels', statuses: ['completed', 'completed', 'completed', 'completed'] },
      ],
    },
    {
      name: 'Beneficiary Centralization',
      percent: 60,
      standards: [
        { name: 'User Engagement', statuses: ['inProgress', 'inProgress', 'inProgress', 'completed'] },
        { name: 'User Relationship', statuses: ['completed', 'completed', 'completed'] },
        { name: 'User Experience', statuses: ['completed', 'completed', 'completed', 'inProgress', 'inProgress'] },
      ],
    },
    {
      name: 'Government Data',
      percent: 87.5,
      standards: [
        { name: 'Data Governance', statuses: ['inProgress', 'inProgress', 'inProgress'] },
        { name: 'Data Usage & Availability', statuses: ['inProgress', 'inProgress', 'inProgress'] },
        { name: 'Open Data', statuses: ['completed', 'completed', 'completed'] },
      ],
    },
    {
      name: 'Research And Innovation',
      percent: 17.65,
      standards: [
        { name: 'Innovation', statuses: ['delayed', 'delayed', 'delayed', 'delayed'] },
        { name: 'Creative Solutions', statuses: ['inProgress', 'inProgress'] },
      ],
    },
  ],
  compliance: { value: 65, label: 'Basic Standards 2025' },
  auditReadiness: { value: 80, overdue: 12, missingEvidence: 5 },
  leaders: [
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', score: 96, avatarUrl: 'https://i.pravatar.cc/96?img=12' },
    { name: 'Sarah Al-Khaled', role: 'Beneficiary Perspective', score: 94, avatarUrl: 'https://i.pravatar.cc/96?img=47' },
    { name: 'Mohammad Al-Mansour', role: 'IT Perspective', score: 92, avatarUrl: 'https://i.pravatar.cc/96?img=33' },
  ],
  monthlyPerformance: [
    { month: 'Jan', value: 82 },
    { month: 'Feb', value: 74 },
    { month: 'Mar', value: 78 },
    { month: 'Apr', value: 42 },
    { month: 'May', value: 85 },
    { month: 'Jun', value: 75 },
    { month: 'Jul', value: 55 },
    { month: 'Aug', value: 84 },
    { month: 'Sept', value: 72 },
    { month: 'Oct', value: 50 },
    { month: 'Nov', value: 82 },
    { month: 'Dec', value: 76 },
  ],
  activities: [
    {
      title: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
      subtitle: '',
      when: '5 Mins Ago',
      color: 'danger',
    },
    {
      title: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
      subtitle: '',
      when: '20 Mins Ago',
      color: 'danger',
    },
    {
      title: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
      subtitle: '',
      when: '1 Hour Ago',
      color: 'danger',
    },
  ] satisfies ActivityItem[],
}


