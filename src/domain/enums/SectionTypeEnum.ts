import {
  mdiAccountCowboyHat,
  mdiHeartBroken,
  mdiLeaf,
  mdiSkull,
  mdiSword,
  mdiTreasureChest,
  mdiTrophy
} from "@mdi/js";

type SectionType = {
    category: string,
    slug: string,
    label: string,
    nodeColor: string,
    icon: string,
};

export const SectionTypeEnum = {
  TRAGIC_END: {
    category: "end",
    slug: 'tragicEnd',
    label: 'Fin tragique',
    nodeColor: '#C62828',
    icon: mdiSkull,
  },
  HAPPY_END: {
    category: "end",
    slug: 'happyEnd',
    label: 'Fin victorieuse',
    nodeColor: '#FDD835',
    icon: mdiTrophy,
  },
  FIGHT: {
    category: "normal",
    slug: 'fight',
    label: 'Combat',
    nodeColor: '#8D6E63',
    icon: mdiSword,
  },
  DISCOVERY: {
    category: "normal",
    slug: 'discovery',
    label: 'Découverte',
    nodeColor: '#FDD835',
    icon: mdiTreasureChest,
  },
  INJURY: {
    category: "normal",
    slug: 'injury',
    label: 'Blessure',
    nodeColor: '#C62828',
    icon: mdiHeartBroken,
  },
  CARE: {
    category: "normal",
    slug: 'care',
    label: 'Soin',
    nodeColor: '#4CAF50',
    icon: mdiLeaf,
  },
  MEET: {
    category: "normal",
    slug: 'meet',
    label: 'Rencontre',
    nodeColor: '#8D6E63',
    icon: mdiAccountCowboyHat,
  },

  getTypesByCategory: (category: string): Array<SectionType> => {
    return Object.values(SectionTypeEnum)
      .filter(sectionType => typeof sectionType === 'object' && sectionType.category === category);
  },

  getTypeBySlug: (slug: string): SectionType => {
    return Object.values(SectionTypeEnum)
      .find(sectionType => typeof sectionType === 'object' && sectionType.slug === slug);
  },
} as const;
