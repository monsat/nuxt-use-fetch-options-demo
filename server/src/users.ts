import type { User } from '@/types/index'

const dummyProperties = {
  dummyA: 'dummyA',
  dummyB: 'dummyB',
  dummyC: 'dummyC',
  dummyD: 'dummyD',
  dummyE: 'dummyE',
  dummyF: 'dummyF',
  dummyG: 'dummyG',
  dummyH: 'dummyH',
  dummyI: 'dummyI',
  dummyJ: 'dummyJ',
  dummyK: 'dummyK',
  dummyL: 'dummyL',
  dummyM: 'dummyM',
  dummyN: 'dummyN',
  dummyO: 'dummyO',
}

export const users = [
  {
    id: '1001',
    name: '佐藤',
    age: 10,
    ...dummyProperties,
  },
  {
    id: '1002',
    name: '鈴木',
    age: 20,
    ...dummyProperties,
  },
  {
    id: '1003',
    name: '田中',
    age: 30,
  },
] satisfies User[]
