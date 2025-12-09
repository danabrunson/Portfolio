import { getAssetPath } from '../utils/paths'

// Projects data - add more projects here
export const projects = [
  {
    id: 'interaction-design-rules',
    title: 'Interaction Design Rules',
    category: 'Case Study',
    thumbnail: getAssetPath('/images/case-study-1-redesign-1.png'),
    skills: ['Visual Design', 'Design Principles', 'Figma'],
  },
  {
    id: 'design-sprint',
    title: 'Interaction Design Process',
    category: 'Case Study',
    thumbnail: getAssetPath('/images/prototype-2-landing.png'),
    skills: ['UX Design', 'Prototyping', 'Figma'],
  }
  // Add more projects here as you create them
]




