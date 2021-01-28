import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { QuizContainer } from '.';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.wrong};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  font-size: 14px;
  :hover{
    background: ${({ theme }) => theme.colors.primary};
  }
`;


function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`
  return (
    <Widget>
      <Widget.Header>
        <h3>Pergunta {`${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="Imagem da Pergunta"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit()
          }}
        >
          {
            question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic
                  as="label"
                  htmlFor={alternativeId}
                >
                  <input
                    type="radio"
                    value={alternativeIndex}
                    name={questionId}
                    id={alternativeId}
                  />
                  {` ${alternative}`}
                </Widget.Topic>
              )
            })
          }
          <Button onSubmit="" >
            Confirmar
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  )
}

function Loanding() {

  return (
    <Widget>
      <Widget.Header>
        <h3>Carregando</h3>
      </Widget.Header>

      <Widget.Content>
        [Carregando]
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZZ: "QUIZZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
}

export default function Questions() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [screenState, setScreenState] = useState(screenStates.LOADING)

  const totalQuestions = db.questions.length
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZZ);
    }, 1 * 1000);
  }, [])

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT)
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg.question1}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
          />
        )}

        {screenState === screenStates.LOADING && (
          <Loanding />
        )}

        {screenState === screenStates.RESULT && (
          <div>
            <h3>Parabéns!</h3>
            <p>Você acertou X questões</p>
          </div>
        )}


      </QuizContainer>
    </QuizBackground>
  );
}
