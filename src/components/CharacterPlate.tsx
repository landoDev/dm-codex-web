import styled from '@emotion/styled';
import { Avatar, Stack } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


export type CharacterPlate = {
    name: string;
    img?: string;
    ac?: string;
    health?: number;
}

interface CharacterPlateProps {
    name: string;
    img?: string;
    ac?: string;
    health?: number;
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
    justify-content: center;
    width: 20%
`


const CharacterPlate = ({ img, name, ac, health = 0 }: CharacterPlateProps) => {
    const healthPlaceholer = 0 // will use state
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
                    <CharacterText><SecurityIcon />{ac || "N/A"}</CharacterText>
                </CharacterElement>
                <CharacterElement>
                    <CharacterText>
                        <LocalHospitalIcon />
                        {healthPlaceholer}/{health}
                    </CharacterText>
                </CharacterElement>
            </Stack>
        </CharacterPlateContainer>
    )
}

export default CharacterPlate;