import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Form = styled.form`
 display: flex;
 gap:40px;
 margin:30px 0;
 padding: 60px;
 border: 2px solid  ${theme.colors.yellow};
`;

export const FormInput = styled.input`
margin-left: 15px;
border:none;
font-size:${theme.fontSizes.medium};
background-color: ${theme.colors.yellow};
color: ${theme.colors.dark};
:hover, :focus{
  outline:none;
}
`;

export const FormButton = styled.button`
padding:4px;
font-size:16px;
border:2px solid ${theme.colors.light};
transition: background-color ${theme.animation.cubicBezier}, 
color ${theme.animation.cubicBezier};
:hover {
  background-color: ${theme.colors.light}; 
  color: ${theme.colors.accent};
}
`;
