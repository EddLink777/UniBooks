import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GenresList(){
    const [genre, setGenre]=useState([]);
    const dir ="http://localhost:4000/genre/";
    const editdir="/genres/edit/";
    const navigate = useNavigate();

    const loadGenres= async ()=>{
       const res = await fetch(dir);
       const data = await res.json();
       setGenre(data);
    }

    useEffect(() => {
        loadGenres();
    }, [])

    const handleDelete = async (id) =>{
        try{
            const res = await fetch(dir+id, {
                method: "DELETE",
                body: JSON.stringify(genre),
                headers:{"Content-Type": "application/json"}, 
            })
    
            //const data = await res.json();
            setGenre(genre.filter(genre=>genre.id !== id));
        }
        catch (error){

        }
        
    }

    return(
        <div>
            <h3>Genres List</h3> 
            <Button variant="outlined" size="small" className="BtnD-margin" onClick={()=> navigate("/genres/new")} color="secondary" >Add Genre</Button>
            <Button variant="outlined" size="small" className="BtnD-margin" onClick={()=> navigate("/usersxbooks")} color="secondary" >Back</Button>
            {
                genre.map((genre) => (
                    <Card className="Card-inMap" key={genre.id} >
                        <CardContent  className="CardC">
                        <div className="WhiteC">
                            <Typography> {genre.genre} </Typography>
                        </div>
                        <div>
                            <Button variant="contained" color="warning" onClick={()=> navigate(editdir+genre.id)} >Edit</Button>
                            <Button variant="contained" color="error" onClick={()=> handleDelete(genre.id)} className="BtnD-margin">Delete</Button>
                        </div>
                            
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}