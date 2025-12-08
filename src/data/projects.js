import { getAssetPath } from '../utils/paths'

// Projects data - add more projects here
export const projects = [
  {
    id: 'interaction-design-rules',
    title: 'Toronto Cupcakes',
    category: 'Case Study',
    thumbnail: getAssetPath('/case-study-1-issue-1.png'),
    skills: ['Visual Design', 'Design Principles', 'Figma'],
  },
  {
    id: 'design-sprint',
    title: 'Interaction Design ',
    category: 'Case Study',
    thumbnail: getAssetPath('/design-sprint-thumbnail.png'),
    skills: ['UX Design', 'Prototyping', 'Figma'],
  }
  // Add more projects here as you create them
]




