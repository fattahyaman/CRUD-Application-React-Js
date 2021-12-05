import {Box} from '@material-ui/core';
import instatele from '../Assets/Images/InstaTele.jpeg';
import youtube from '../Assets/Images/youtube.png';
import {AppBar, Toolbar, makeStyles} from '@material-ui/core';


const useStyle =  makeStyles({
    image : {
        width: '50%',
        height: '50%'
    }
})


const CodeForInterview = () => {
    const classes = useStyle();
    return (
       <Box style = {{display: 'flex'}}>
       
        <img className = {classes.image} src={youtube} /> 
        <img className = {classes.image} src={instatele} /> 

       </Box>
    )
}

export default CodeForInterview;