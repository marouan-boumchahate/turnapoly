import React from 'react';
import { Container } from '../layout/Container';
import { RulesHeader } from './RulesHeader';
import { RulesTabsBar } from './RulesTabsBar';
import { RulesTopicRenderer } from './RulesTopicRenderer';
import { RulesBottomNav } from './RulesBottomNav';
import { ProgressBar } from '../ui/ProgressBar';
import { useRulesNavigation } from '../../hooks/useRulesNavigation';
import { RULES_TOPICS } from '../../data/rulesTopicsData';

export const RulesView: React.FC = () => {
  const { activeIndex, activeTopic, isFirst, isLast, goToIndex, goToNext, goToPrev } =
    useRulesNavigation();

  return (
    <Container id="rules">
      <RulesHeader />
      <ProgressBar
        current={activeIndex}
        total={RULES_TOPICS.length}
        colorVar={activeTopic.colorVar}
      />
      <RulesTabsBar
        topics={RULES_TOPICS}
        activeIndex={activeIndex}
        onSelectIndex={goToIndex}
      />
      <RulesTopicRenderer activeIndex={activeIndex} />
      <RulesBottomNav
        onPrev={goToPrev}
        onNext={goToNext}
        isFirst={isFirst}
        isLast={isLast}
      />
    </Container>
  );
};
