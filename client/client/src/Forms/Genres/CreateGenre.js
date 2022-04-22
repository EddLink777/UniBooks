import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import {  useState, useEffect } from "react";

export default function CreateGenre(){
    const [genre, setGenre]= useState({
        genre:"",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(genre);
       
    };

    const handleChange = (e) =>
        setGenre({...genre, [e.target.name]:e.target.value})
    

    return(
        <Grid container direction="column" alignItems={'center'} justifyContent="center"  >
            <Grid item xs={3}>
                <Card sx={{mt:5}} style={{
                    backgroundColor:"#1e272e",
                    padding:"1rem"
                }}>
                    <Typography variant="5" textAlign={"center"} color='white'>
                        Create Genre
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                variant='outlined' 
                                placeholder='Genre' 
                                label="Ingress new genre" 
                                sx={{
                                    display: "block",
                                    margin: ".5rem"
                                   
                                }}

                                name="genre"

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

                            <Button variant="contained" color="success" type="submit">
                                Save
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
    )
}