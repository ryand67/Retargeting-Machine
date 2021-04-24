import styled from 'styled-components';

import { CardProps } from '../util/Interfaces';

function Skyskraper({ mainText, secondaryText, ctaText, ctaColor }: CardProps) {
    return (
        <SkyscraperRetarget>
            
        </SkyscraperRetarget>
    )
}

const SkyscraperRetarget = styled.div`
    width: 160px;
    height: 600px;
    border: 2px solid black;
`;

export default Skyskraper
// 160w x 600h