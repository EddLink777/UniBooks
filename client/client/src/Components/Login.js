import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import {  useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Login(){
    const dir ="http://localhost:4000/user/";
    
    const [user, setUser]= useState({
        first_name:"",
        last_name:"",
        email:"",
        role:"",
        password:"",
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
                body: JSON.stringify(user),
                headers:{"Content-Type": "application/json"}, 
            });
    
            const data = await res.json();
            console.log(data);

        }
        else{
            const res = await fetch(dir, {
                method: "POST",
                body: JSON.stringify(user),
                headers:{"Content-Type": "application/json"}, 
            });
    
            const data = await res.json();
    
            
        }

        setLoading(false);
        navigate("/users"); 
       
    };

    const handleChange = (e) =>
        setUser({...user, [e.target.name]:e.target.value});

    const loadUser = async (id) =>{
        const res = await fetch(dir+id);
        const data = await res.json();
       
        setUser({
            first_name:data[0].first_name,
            last_name:data[0].last_name,
            email:data[0].email,
            role:data[0].role
        });
        setEdit(true);
    };

    useEffect(()=>{
       if (params.id){
           loadUser(params.id);
       }
    },[params.id]);

    return(
        <Grid container direction="column" alignItems={'center'} justifyContent="center"  >
            <Grid item xs={3}>
                <Card sx={{mt:5}} className="CardBg">
                    <Typography variant="h6"  color='white' >
                        {edit ? "Login true" : "Login false"}
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                variant='outlined' 
                                placeholder='Name' 
                                label={edit ? "Name":"Name"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="genre"
                                value={user.first_name}
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

                            <Button variant="contained" color="success" type="submit" disabled={!user.first_name}  sx={{margin: "1rem"}} >
                                {loading ? <CircularProgress color='success' size={24}/> : "Save"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
    )
}