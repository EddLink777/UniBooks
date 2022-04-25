import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import {  useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import validator from "validator";

export default function CreateStudent(){
    const dir ="http://localhost:4000/user/";
    
    const [user, setUser]= useState({
        first_name:"",
        last_name:"",
        email:"",
        role:2,//Student role
    });

    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [emailError, setEmailError] = useState(true);

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

    const handleChange = (e) =>{
        if(user.email!==""){
            if (validator.isEmail(user.email)) {
                setEmailError(true);
                
            }
            else {
                setEmailError(false);
            };
        }
        setUser({...user, [e.target.name]:e.target.value});
    };
       

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
                        {edit ? "Edit User" : "Create User"}
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                variant='outlined' 
                                placeholder='First Name' 
                                label={edit ? "First Name":"First Name"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="first_name"
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

                            <TextField 
                                variant='outlined' 
                                placeholder='Last Name' 
                                label={edit ? "Last Name":"Last Name"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="last_name"
                                value={user.last_name}
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

                            <TextField 
                                variant='outlined' 
                                placeholder='E-mail' 
                                label={edit ? "E-mail":"E-mail"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="email"
                                value={user.email}
                                helperText={emailError ? "Valid E-mail" : "Invalid E-mail"}
                                error={!emailError}
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

                            <Button variant="contained" color="success" type="submit" disabled={!user.first_name || !user.last_name || user.email.length<2 || !emailError}  sx={{margin: "1rem"}} >
                                {loading ? <CircularProgress color='success' size={24}/> : "Save"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
    )
}