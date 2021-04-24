import styled from 'styled-components';

import { CardProps } from '../util/Interfaces';

function Mobile({ mainText, secondaryText, ctaText, ctaColor }: CardProps): JSX.Element {
    return (
        <MobileRetarget>
            
        </MobileRetarget>
    )
}

const MobileRetarget = styled.div`
    width: 320px;
    height: 50px;
    border: 2px solid black;
`;

export default Mobile
//320w x 50h