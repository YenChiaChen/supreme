export interface TextProps {
  text: string
  color?: string
  subItems?: TextProps[]
}

export interface ListProps {
  items: TextProps[]
  listType?: "decimal" | "disc" | "none"
  className?: string
}

export interface InfoListProps {
  title?: string
  content: string
}

export interface CollapseListProps {
  title: string
  color?: string
  content: TextProps[]
  icon?: any
}

export interface CardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  iconColor?: string
  list?: ListProps
}

export interface CardGridProps {
  cards: CardProps[]
}

export interface TabProps {
  years: string[]
  children: React.ReactNode
  tabColor?: string
  icons?: React.ReactNode[]
}

