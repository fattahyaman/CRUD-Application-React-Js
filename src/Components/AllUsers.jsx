import {  Table, TableBody, TableCell, TableHead, TableRow , makeStyles , Button } from "@material-ui/core";
import { useEffect , useState } from "react";
import { getUsers , deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table: {
        width: "85%",
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: '13px'
        }
    }

})



const AllUsers = () => {
 
    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
       const response = await getUsers();
       console.log(response);
       setUsers(response.data)
    }
    
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
       <Table className = {classes.table}>
            <TableHead>
                <TableRow className = {classes.thead}>
                    <TableCell> Id</TableCell>
                    <TableCell> Name</TableCell>
                    <TableCell> Username</TableCell>
                    <TableCell> Email</TableCell>
                    <TableCell> Phone</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 {
                     users.map(user => ( 
                         <TableRow>
                             <TableCell>{user.id} </TableCell>
                             <TableCell>{user.name} </TableCell>
                             <TableCell>{user.username} </TableCell>
                             <TableCell>{user.email} </TableCell>
                             <TableCell>{user.phone} </TableCell>
                             <TableCell>
                                <Button
                                    variant= "contained" 
                                    color = "primary"
                                    component = {Link}
                                    style = {{marginRight : 10}}
                                    to={`/edit/${user.id}`} >
                                    Edit
                                </Button>
                                <Button
                                     variant= "contained"
                                     color = "secondary"
                                     onClick = {() => deleteUserData(user.id)} >
                                     Delete
                                 </Button>
                              </TableCell>
                         </TableRow>
                     ))
                 }
            </TableBody>
       </Table>
    )
}

export default AllUsers;