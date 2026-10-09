import { RuleTopicInfo } from '../types/ruleTopic';

export const RULES_TOPICS: RuleTopicInfo[] = [
  {
    id: 'tips',
    tabLabel: '🚫 Tips',
    colorVar: 'red',
  },
  {
    id: 'setup',
    tabLabel: '🎲 Setup',
    colorVar: 'green',
  },
  {
    id: 'turn',
    tabLabel: '🎯 Your turn',
    colorVar: 'blue',
  },
  {
    id: 'properties',
    tabLabel: '🏠 Properties',
    colorVar: 'brown',
  },
  {
    id: 'spaces',
    tabLabel: '📍 Spaces',
    colorVar: 'sky',
    isYellowText: true,
  },
  {
    id: 'jail',
    tabLabel: '🔒 Jail',
    colorVar: 'orange',
    isYellowText: true,
  },
  {
    id: 'buildings',
    tabLabel: '🏗️ Buildings',
    colorVar: 'pink',
  },
  {
    id: 'deals',
    tabLabel: '🤝 Deals',
    colorVar: 'yellow',
    isYellowText: true,
  },
  {
    id: 'no-money',
    tabLabel: '🆘 No money',
    colorVar: 'red',
  },
];
