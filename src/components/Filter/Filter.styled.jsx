import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FilterInput = styled.input`
margin-left: 15px;
border:none;
font-size:${theme.fontSizes.medium};
background-color: ${theme.colors.yellow};
color: ${theme.colors.dark};
:hover, :focus{
  outline:none;
}
`;

