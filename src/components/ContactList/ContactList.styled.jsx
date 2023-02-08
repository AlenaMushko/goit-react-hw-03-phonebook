import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const List = styled.ul`
margin-top: 20px;
`;
export const Item = styled.li`
:not(:first-child){
  margin-top: 15px;
}

:nth-child(2n+1){
 background-color: ${theme.colors.yellow};
}
`;