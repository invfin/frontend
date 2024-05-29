import {
  TypographyIcon,
  ShadowIcon,
  PaletteIcon,
  HomeIcon,
  BugIcon,
  DashboardIcon,
  BrandChromeIcon,
  HelpIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Inicio' },
  {
    title: 'Home',
    icon: HomeIcon,
    to: '/dashboard/default'
  },
  {
    title: 'Subscripciones',
    icon: DashboardIcon,
    to: '/dashboard/default'
  },
  { divider: true },
  { header: 'You' },
  {
    title: 'Análisis',
    icon: DashboardIcon,
    to: '/dashboard/default'
  },
  // {
  //   title: 'Authentication',
  //   icon: KeyIcon,
  //   to: '/auth',
  //   children: [
  //     {
  //       title: 'Login',
  //       icon: CircleIcon,
  //       to: '/auth/login'
  //     },
  //     {
  //       title: 'Register',
  //       icon: CircleIcon,
  //       to: '/auth/register'
  //     }
  //   ]
  // },
  {
    title: 'Aportes',
    icon: BugIcon,
    to: '/pages/error'
  },
  { divider: true },
  { header: 'Explorar' },
  {
    title: 'Empresas',
    icon: TypographyIcon,
    to: '/utils/typography'
  },
  {
    title: 'Noticias',
    icon: ShadowIcon,
    to: '/utils/shadows'
  },
  {
    title: 'Aprende',
    icon: PaletteIcon,
    to: '/utils/colors'
  },
  // {
  //   title: 'Icons',
  //   icon: WindmillIcon,
  //   to: '/forms/radio',
  //   children: [
  //     {
  //       title: 'Tabler Icons',
  //       icon: CircleIcon,
  //       to: '/icons/tabler'
  //     },
  //     {
  //       title: 'Material Icons',
  //       icon: CircleIcon,
  //       to: '/icons/material'
  //     }
  //   ]
  // },
  { divider: true },
  {
    title: 'Sample Page',
    icon: BrandChromeIcon,
    to: '/starter'
  },
  {
    title: 'Documentation',
    icon: HelpIcon,
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  }
];

export default sidebarItem;
