import { getAssetPath } from '../utils/paths'
// Project data for projects page:
// id: unique identifier for the project, used for routing
// title: the name of the project
// category: the type of project (e.g., case study, personal project, etc.)
// thumbnail: a path to an image representing the project, used on the projects listing page
// skills: an array of skills or tools used in the project, which can be displayed on the project card or detail page


export const projects = [
    {
    id: 'twitter-redesign',
    title: 'Twitter Redesign',
    category: 'Case Study',
    thumbnail: getAssetPath('/images/Card-Front.png'),
    skills: ['UX Design Process', 'Figma'],
  },
  
  {
    id: 'design-sprint',
    title: 'Interaction Design Process',
    category: 'Case Study',
    thumbnail: getAssetPath('/images/prototype-2-landing.png'),
    skills: ['UX Design', 'Prototyping', 'User Research','Figma'],
  },
  {
    id: 'interaction-design-rules',
    title: 'Interaction Design Rules',
    category: 'Case Study',
    thumbnail: getAssetPath('/images/case-study-1-redesign-1.png'),
    skills: ['Visual Design', 'Design Principles', 'Figma'],
  },
]




