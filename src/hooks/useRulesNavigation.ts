import { useState, useCallback } from 'react';
import { RULES_TOPICS } from '../data/rulesTopicsData';

export function useRulesNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < RULES_TOPICS.length) {
      setActiveIndex(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const goToNext = useCallback(() => {
    goToIndex(activeIndex + 1);
  }, [activeIndex, goToIndex]);

  const goToPrev = useCallback(() => {
    goToIndex(activeIndex - 1);
  }, [activeIndex, goToIndex]);

  return {
    activeIndex,
    activeTopic: RULES_TOPICS[activeIndex],
    totalTopics: RULES_TOPICS.length,
    isFirst: activeIndex === 0,
    isLast: activeIndex === RULES_TOPICS.length - 1,
    goToIndex,
    goToNext,
    goToPrev,
  };
}
