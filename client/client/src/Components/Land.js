import { Button, TextField, CardContent, Typography,  Box, CardHeader,Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Land(){
    const navigate = useNavigate();

    return(
        <Grid container direction="column" alignItems={'center'} justifyContent="center" >
            <div className="CardCB ContentL" height="100%" width="100%">
                <TextField
                    id="outlined-read-only-input"
                    label="Note:Read Only"
                    defaultValue="Miss Role implementation and login"
                    InputProps={{
                        readOnly: true,
                       style:{
                            color:"white",
                       } 
                    }}

                    InputLabelProps={{
                        style:{
                            color:"white"
                        }
                    }}

                />
                <Button size="large" color="success" onClick={()=>navigate("/")}>AS Student</Button>
                <Button size="large" color="secondary" onClick={()=>navigate("/usersxbooks")}>As Librarian</Button>
            </div>
        </Grid>
    )
}