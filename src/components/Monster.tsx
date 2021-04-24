import styled from 'styled-components';

import { CardProps } from '../util/Interfaces';

function Monster({ mainText, secondaryText, ctaText, ctaColor }: CardProps): JSX.Element {
    return (
        <MonsterRetarget>
            
        </MonsterRetarget>
    )
}

const MonsterRetarget = styled.div`
    width: 300px;
    height: 600px;
    border: 2px solid black;
`;

export default Monster

//300w x 600h