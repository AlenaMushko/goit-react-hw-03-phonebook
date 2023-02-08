import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ElWraper = styled.div`
display: flex;
gap:20px;
align-items: center;
`;

export const ElButton = styled.button`
border:2px solid ${theme.colors.light};
transition: background-color ${theme.animation.cubicBezier}, 
color ${theme.animation.cubicBezier};
:hover {
background-color: ${theme.colors.light}; 
  color: ${theme.colors.accent};
}
`;

