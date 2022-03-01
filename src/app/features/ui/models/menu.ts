import { NavItem } from './nav-item';

export let menu: NavItem[] = [
    {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'dashboard'
    },
    {
        displayName: 'Home',
        iconName: 'home',
        route: 'home'
    },
    {
        displayName: 'Audio',
        iconName: 'audiotrack',
        route: 'audio'
    },
    {
        displayName: 'Engine 3D',
        iconName: '3d_rotation',
        route: 'engine'
    },
    {
        displayName: 'Resize H',
        iconName: 'horizontal_distribute',
        route: 'resize-h'
    },
    {
        displayName: 'Resize V',
        iconName: 'vertical_distribute',
        route: 'resize-v'
    },
    {
        displayName: 'User',
        iconName: 'face',
        route: 'user',
        children: [
            {
                displayName: 'Account Info',
                iconName: 'account_box',
                route: 'user/account-info'
            }
        ]
    }
]