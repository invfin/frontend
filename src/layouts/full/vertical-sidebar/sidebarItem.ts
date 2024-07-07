import {
  HelpIcon,
  // StarsIcon,
  WalletIcon,
  ReportAnalyticsIcon,
  // HistoryIcon,
  BuildingBankIcon,
  NewsIcon,
  // ChalkboardIcon,
  ApiIcon,
  HomeIcon
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
  // {
  //   title: 'Subscripciones',
  //   icon: StarsIcon,
  //   to: '/subscriptions'
  // },
  { divider: true },
  { header: 'You' },
  {
    title: 'Inversiones',
    icon: ReportAnalyticsIcon,
    to: '/investments'
  },
  {
    title: 'Budget',
    icon: WalletIcon,
    to: '/budget'
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
  // {
  //   title: 'Aportes',
  //   icon: HistoryIcon,
  //   to: '/contributions'
  // },
  { divider: true },
  { header: 'Explorar' },
  {
    title: 'Empresas',
    icon: BuildingBankIcon,
    to: '/companies'
  },
  {
    title: 'Noticias',
    icon: NewsIcon,
    to: '/news'
  },
  // {
  //   title: 'Aprende',
  //   icon: ChalkboardIcon,
  //   to: '/learn'
  // },
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
    title: 'API',
    icon: ApiIcon,
    to: 'http://127.0.0.1:8000/scalar',
    type: 'external'
  },
  {
    title: 'Ayuda',
    icon: HelpIcon,
    to: '/help'
  }
];

export default sidebarItem;
