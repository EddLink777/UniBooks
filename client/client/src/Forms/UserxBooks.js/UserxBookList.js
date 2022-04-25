import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography, DataGrid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CreateUserxBook(){

    const [userxbook, setUserxBook]=useState([]);
    const dir ="http://localhost:4000/userbook/";
    const editdir="/userbook/edit/";
    const navigate = useNavigate();

    const loadUserxBook= async ()=>{
       const res = await fetch(dir);
       const data = await res.json();
       setUserxBook(data);
    }

    useEffect(() => {
        loadUserxBook();
    }, [])

    const handleDelete = async (id) =>{
        try{
            const res = await fetch(dir+id, {
                method: "DELETE",
                body: JSON.stringify(userxbook),
                headers:{"Content-Type": "application/json"}, 
            })
    
            //const data = await res.json();
            setUserxBook(userxbook.filter(userxbook=>userxbook.id !== id));
        }
        catch (error){

        }
        
    }

    const columns=[
        
        {
            field: 'first_name',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'last_name',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'E mail',
            
            width: 110,
            editable: true,
        },
    ];
    const rows=[userxbook.rows];

    return(
        <div>
            <h3>Genres List</h3> 
            {
                userxbook.map((genre) => (
                    <Card className="Card-inMap" key={userxbook.id} >
                        <CardContent  className="CardC">
                        <div className="WhiteC">
                            <Typography> {userxbook.genre} </Typography>
                        </div>
                        <div>
                            <Button variant="contained" color="warning" onClick={()=> navigate(editdir+userxbook.id)} >Edit</Button>
                            <Button variant="contained" color="error" onClick={()=> handleDelete(userxbook.id)} className="BtnD-margin">Delete</Button>
                        </div>
                            
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}