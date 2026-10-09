import React from 'react';
import { Container } from '../layout/Container';
import { RulesTopNav } from './topNav/RulesTopNav';
import { RulesTopicRenderer } from './RulesTopicRenderer';
import { RulesBottomNav } from './RulesBottomNav';
import { useRulesNavigation } from '../../hooks/useRulesNavigation';
import { RULES_TOPICS } from '../../data/rulesTopicsData';
import '../../styles/rules.css';

export const RulesView: React.FC = () => {
  const { activeIndex, isFirst, isLast, goToIndex, goToNext, goToPrev } =
    useRulesNavigation();

  const prevTopic = !isFirst ? RULES_TOPICS[activeIndex - 1] : undefined;
  const nextTopic = !isLast ? RULES_TOPICS[activeIndex + 1] : undefined;

  return (
    <Container id="rules" size="wide">
      <RulesTopNav
        topics={RULES_TOPICS}
        activeIndex={activeIndex}
        onSelectIndex={goToIndex}
      />

      <section className="rules-content-section" aria-label="Selected rulebook topic">
        <RulesTopicRenderer activeIndex={activeIndex} />

        <RulesBottomNav
          onPrev={goToPrev}
          onNext={goToNext}
          isFirst={isFirst}
          isLast={isLast}
          prevTopicTitle={prevTopic?.tabLabel}
          nextTopicTitle={nextTopic?.tabLabel}
          currentIndex={activeIndex}
          totalTopics={RULES_TOPICS.length}
        />
      </section>
    </Container>
  );
};
