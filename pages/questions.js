import styled from 'styled-components'
import { QuizContainer } from '.';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget';


export default function Questions() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <h1>Pagina de Perguntas</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}