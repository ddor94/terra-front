import {
  GlobeIcon
} from '@heroicons/react/outline';

export const MENU_ITEMS = [
  {
    key: 1,
    title: 'Doar',
    sub_items: [
      {
        key: 1,
        icon: GlobeIcon,
        title: "Encontrar Instituições",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        key: 2,
        icon: GlobeIcon,
        title: "Instituições Locais",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ]
  },

  {
    key: 2,
    title: 'Minhas Doações',
    sub_items: [
      {
        key: 1,
        icon: GlobeIcon,
        title: "Estatísticas",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  },
]
