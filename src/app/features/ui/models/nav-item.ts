export interface NavItem{
    displayName:    string
    diabled?:       boolean
    iconName:       string
    route?:         string
    children?:      NavItem[]
}