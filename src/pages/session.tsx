import { styled } from '@mui/material/styles';
import RollTable from '../components/Table';

const SessionPage = () => {
    return <div id="session"><RollTable tablename="Setting a DC" headers={["test", "me"]} rows={[{content: ["hello", "there"]}]}/></div>
}

export default SessionPage;