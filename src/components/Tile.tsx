import styled from 'styled-components';

import { CardProps } from '../util/Interfaces';

function Tile({ mainText, secondaryText, ctaText, ctaColor }: CardProps): JSX.Element {
    return (
        <TileRetarget>
            
        </TileRetarget>
    )
}

const TileRetarget = styled.div`
    width: 300px;
    height: 250px;
    border: 2px solid black;
`;

export default Tile
// 300w x 250h