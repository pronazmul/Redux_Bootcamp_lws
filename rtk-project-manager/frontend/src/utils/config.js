export const projectStatus = [
  'backlog',
  'ready',
  'doing',
  'review',
  'blocked',
  'done',
]

export const ITEM_TYPE = 'ITEM'

// Data TAble Dropdown
export const teamOptions = [
  {
    id: 2,
    name: 'add',
    icon: 'fas fa-user-plus',
  },
  {
    id: 3,
    name: 'delete',
    icon: 'far fa-trash-alt',
  },
]

export const profileDropDown = [
  {
    id: 1,
    title: 'Teams',
    sublink: '/team',
    icon: 'fas fa-users',
  },
  {
    id: 1,
    title: 'Projects',
    sublink: '/project',
    icon: 'fa fa-project-diagram',
  },
  {
    id: 2,
    title: 'Logout',
    sublink: '?tab=logout',
    icon: 'fas fa-power-off',
  },
]

//Default User Data
export const usersCredentials = [
  {
    email: 'traversy@gmail.com',
    password: '1234',
    name: 'Brad Traversy',
    avatar: 'https://avatars.githubusercontent.com/u/5550850?v=4',
    id: 4,
  },
  {
    email: 'nazmul@gmail.com',
    password: '1234',
    name: 'Nazmul Huda',
    avatar: 'https://avatars.githubusercontent.com/u/58470993',
    id: 1,
  },
]

export const colors = [
  'text-green-500 bg-green-500',
  'text-orange-500 bg-orange-500',
  'text-indigo-500 bg-indigo-500',
  'text-red-500 bg-red-500',
  'text-purple-500 bg-purple-500',
  'text-cyan-500 bg-cyan-500',
  'text-rose-500 bg-rose-500',
]
