'use client';

import { ArrowDropDown as LogoArrowDropDown } from '../SVGs/ArrowDropDown';
import { questions } from '@/data/questions';
import { useState } from 'react';

import styles from '../../stylesheets/components/FAQComponentsStyles/Questions.module.scss';

export const Questions: React.FC = () => {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleQuestion = (questionId: number) => {
    expandedQuestions.includes(questionId)
      ? setExpandedQuestions(expandedQuestions.filter((id) => id != questionId))
      : setExpandedQuestions((prev) => [...prev, questionId]);
  };

  return (
    <div className={styles.container}>
      {questions.map(({ question, answer }, idx) => {
        const isQuestionExpanded = !expandedQuestions.includes(idx)
          ? styles.expanded
          : styles.collapsed;

        return (
          <div className={`${styles.questionWrapper} ${isQuestionExpanded}`} key={idx}>
            <div className={styles.headingWrapper}>
              <h2 className={styles.heading}>{question}</h2>
              <button className={styles.button} onClick={() => toggleQuestion(idx)}>
                <LogoArrowDropDown />
              </button>
            </div>
            <div className={styles.answerWrapper}>
              <p className={styles.text}>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
