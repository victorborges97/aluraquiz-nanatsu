import styled from 'styled-components'
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground'


export default function Questions() {
  return (
    <QuizBackground backgroundImage={db.bg}>

    </QuizBackground>
  );
}