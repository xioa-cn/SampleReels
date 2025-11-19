export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    link?: string
    github?: string
    image?: string
    status: 'completed' | 'in-progress' | 'planned'
}
