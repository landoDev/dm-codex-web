import styled from '@emotion/styled';
import { Avatar, Stack } from '@mui/material'

export type CharacterPlate = {
    name: string;
    img?: string;
    ac?: string;
}

interface CharacterPlateProps {
    name: string;
    img?: string;
    ac?: string;
}

const CharacterPlateContainer = styled.div`
    display: flex
    justify-content: space-between
    align-items: center;
    background-color: red;
    padding: 1px
    border: 1px solid black
    width: 50%
`
const CharacterText = styled.p`
    text-align: center
`

const CharacterElement = styled.div`
    align-self: center;
    width: 20%
`


const CharacterPlate = ({ img, name, ac }: CharacterPlateProps) => {
    return (
        <CharacterPlateContainer>
            <Stack
                direction="row" 
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
            >
                <CharacterElement>
                    <Avatar src={img}/>
                </CharacterElement>
                <CharacterElement>
                    <CharacterText>{name}</CharacterText>
                </CharacterElement>
                <CharacterElement>
                    <CharacterText>AC:{ac}</CharacterText>
                </CharacterElement>
            </Stack>
        </CharacterPlateContainer>
    )
}

export default CharacterPlate;