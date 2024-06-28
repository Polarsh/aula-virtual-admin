import {
  BookOpenIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  FolderIcon,
  HomeIcon,
  ShoppingCartIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

export const routeNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },

  {
    name: 'Gestión de Usuarios',
    icon: UsersIcon,
    current: false,
    children: [
      {
        name: 'Administradores',
        href: '/gestion-usuarios/administradores'
      },
      {
        name: 'Estudiantes',
        href: '/gestion-usuarios/estudiantes'
      },
      { name: 'Registro de Actividades', href: '/gestion-usuarios/actividades' }
    ]
  },
  {
    name: 'Gestión de Cursos',
    icon: BookOpenIcon,
    href: '/gestion-cursos',
    current: false
  },
  {
    name: 'Gestión de Evaluaciones',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Simulacros', href: '/evaluaciones/simulacros' },
      { name: 'Banco de Preguntas', href: '/evaluaciones/banqueo' }
    ]
  },
  {
    name: 'Compras de Cursos',
    icon: ShoppingCartIcon,
    href: '/compras',
    current: false
  },
  {
    name: 'Reportes y Estadísticas',
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: 'Reportes de Uso', href: '/reportes/uso' },
      {
        name: 'Desempeño de Estudiantes',
        href: '/reportes/desempeno-estudiantes'
      },
      { name: 'Financieros', href: '/reportes/financieros' }
    ]
  },

  {
    name: 'Soporte y Ayuda',
    href: '/soporte',
    icon: ChatBubbleBottomCenterTextIcon,
    current: false
  }
]

export function findTitleByPath (path) {
  for (const item of routeNavigation) {
    if (item.href === path) {
      return item.name
    }
    if (item.children) {
      for (const child of item.children) {
        if (child.href === path) {
          return `${item.name} - ${child.name}`
        }
      }
    }
  }
  return 'Path not found'
}
