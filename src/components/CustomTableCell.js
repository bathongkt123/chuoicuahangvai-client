import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from "@mui/material";
import { TableCell } from '@mui/material';

const CustomTableCell = styled(TableCell)(({ theme }) => (
    {
        fontWeight: 'bold',
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#4E5B73',
            color: 'white',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: '1rem',
            borderBottom: '1px solid #b8b6a9',
            backgroundColor: '#EEEDE8'
        },
    }
))
export default CustomTableCell


