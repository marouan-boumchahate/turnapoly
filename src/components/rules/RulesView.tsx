import React from 'react';
import { Container } from '../layout/Container';
import { RulesTopNav } from './topNav/RulesTopNav';
import { RulesTopicRenderer } from './RulesTopicRenderer';
import { useRulesNavigation } from '../../hooks/useRulesNavigation';
import { RULES_TOPICS } from '../../data/rulesTopicsData';
import '../../styles/rules.css';

export const RulesView: React.FC = () => {
  const { activeIndex, goToIndex } = useRulesNavigation();

  return (
    <Container id="rules" size="wide">
      <RulesTopNav
        topics={RULES_TOPICS}
        activeIndex={activeIndex}
        onSelectIndex={goToIndex}
      />

      <section className="rules-content-section" aria-label="Selected rulebook topic">
        <RulesTopicRenderer activeIndex={activeIndex} />
      </section>
    </Container>
  );
};
