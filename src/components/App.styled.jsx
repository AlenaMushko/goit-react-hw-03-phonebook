import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Container = styled.section`
  max-width: 900px;
  margin-left:20px;
  padding: 24px;
  font-size: 24px;
`;

export const Title = styled.h1`
color: ${theme.colors.light};
text-align: center;
font-size: 42px;
`;

export const ContactsTitle = styled.h2`
  margin: 15px 0;
`;
