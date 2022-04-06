import { algorithm } from './algorithm';

export const ALGORITHMS: algorithm[] = [
  { id: 11, category: 'PLL', name: 'UbPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 12, category: 'PLL', name: 'UaPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 13, category: 'PLL',  name: 'ZPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 14, category: 'PLL',  name: 'AaPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 15, category: 'PLL',  name: 'AbPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 16, category: 'PLL',  name: 'JaPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 17, category: 'PLL',  name: 'JbPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 18, category: 'PLL',  name: 'VPERM', moves:'L R L L2 U R B D\' U\' R\'' },

  { id: 16, category: 'OLL',  name: 'JaPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 17, category: 'OLL',  name: 'JbPERM', moves:'L R L L2 U R B D\' U\' R\'' },
  { id: 18, category: 'OLL',  name: 'VPERM', moves:'L R L L2 U R B D\' U\' R\'' },


  { id: 16, category: 'F2L',  name: 'JaPERM', moves:'U U' },
  { id: 17, category: 'F2L',  name: 'JbPERM', moves:'U U' },
  { id: 18, category: 'F2L',  name: 'VPERM', moves:'U U' },

  { id: 16, category: 'BEGINNER ALGORITHMS',  name: 'JaPERM', moves:'U U' },
  { id: 17, category: 'BEGINNER ALGORITHMS',  name: 'JbPERM', moves:'U U' },
  { id: 18, category: 'BEGINNER ALGORITHMS',  name: 'VPERM', moves:'U U' },
  
];

export const MOVESET: string = 'RLUDBF'

export const CATEGORIES: string[] = [
    'PLL',
    'OLL',
    'F2L',
    'BEGINNER ALGORITHMS'
];