import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import {  useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function CreateGenre(){
    const dir ="http://localhost:4000/genre/";
    
    const [genre, setGenre]= useState({
        genre:"",
    });

    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const navigate = useNavigate();
    const params =useParams();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setLoading(true);

        if (edit){
            const res = await fetch(dir+params.id, {
                method: "PUT",
                body: JSON.stringify(genre),
                headers:{"Content-Type": "application/json"}, 
            });
    
            const data = await res.json();
            console.log(data);

        }
        else{
            const res = await fetch(dir, {
                method: "POST",
                body: JSON.stringify(genre),
                headers:{"Content-Type": "application/json"}, 
            });
    
            const data = await res.json();
    
            
        }

        setLoading(false);
        navigate("/genres"); 
       
    };

    const handleChange = (e) =>
        setGenre({...genre, [e.target.name]:e.target.value});

    const loadGenre = async (id) =>{
        const res = await fetch(dir+id);
        const data = await res.json();
       
        setGenre({genre: data[0].genre});
        setEdit(true);
    };

    useEffect(()=>{
       if (params.id){
           loadGenre(params.id);
       }
    },[params.id]);

    return(
        <Grid container direction="column" alignItems={'center'} justifyContent="center"  >
            <Grid item xs={3}>
                <Card sx={{mt:5}} className="CardBg">
                    <Typography variant="h6"  color='white' >
                        {edit ? "Edit Genre" : "Create Genre"}
                    </Typography>
                    
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                variant='outlined' 
                                placeholder='Genre' 
                                label={edit ? "Genre name":"Ingress new genre"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="genre"
                                value={genre.genre}
                                onChange={handleChange}

                                inputProps={{
                                    style:{
                                        color:"white"
                                    }
                                }}

                                InputLabelProps={{
                                    style:{
                                        color:"white"
                                    }
                                }}
                            />

                            {/* <TextField variant='outlined' placeholder='Genre' label="Ingress new genre" multiline rows={4}/> */}
                            <div>
                            <Button variant="contained" color="success" type="submit" disabled={!genre.genre}  sx={{margin: "1rem"}} >
                                {loading ? <CircularProgress color='success' size={24}/> : "Save"}
                            </Button>
                            <Button variant="contained" onClick={()=> navigate("/genres")} color="secondary" >Back</Button>
                            </div>
                        </form>
                        
                        
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
    )
}