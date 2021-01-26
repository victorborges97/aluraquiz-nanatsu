import styled from 'styled-components';
import Link from "next/link";
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const LabelBtn = styled.a`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 25px;
  background: ${({ theme }) => theme.colors.wrong};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  font-size: 14px;
  :hover{
    background: ${({ theme }) => theme.colors.secundary};
    color: ${({ theme }) => theme.colors.ter};
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>

            <Link href="/questions">
              <LabelBtn>Questions</LabelBtn>
            </Link>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/victorborges97/aluraquiz-nanatsu" />
    </QuizBackground>
  );
}