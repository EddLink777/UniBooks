
import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography, MenuItem, } from '@mui/material';
import {  useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function CreateGenre(){
    const dir ="http://localhost:4000/book/";
    const genredir= "http://localhost:4000/genre/";
    
    const [book, setBook]= useState({
        title:"",
        author:"",
        published_year:"",
        copies:"",
        genre:"",
    });

    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [genre, setGenre] = useState([]);

    const navigate = useNavigate();
    const params =useParams();

    const loadGenre= async (e) =>{
        const res = await fetch(genredir);
        const data = await res.json();

        
        setGenre(data);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setLoading(true);

        if (edit){
            console.log(book);
            const res = await fetch(dir+params.id, {
                method: "PUT",
                body: JSON.stringify(book),
                headers:{"Content-Type": "application/json"}, 
            });
    
            const data = await res.json();
            console.log(data);

        }
        else{
            const res = await fetch(dir, {
                method: "POST",
                body: JSON.stringify(book),
                headers:{"Content-Type": "application/json"}, 
            });
    
            const data = await res.json();
    
            
        }

        setLoading(false);
        navigate("/books"); 
       
    };

    const handleChange = (e) =>{
        setBook({...book, [e.target.name]:e.target.value});
        
    }
        

    const loadBook = async (id) =>{
        const res = await fetch(dir+id);
        const data = await res.json();
       console.log(data);
        setBook({
            title: data[0].title,
            author: data[0].author,
            published_year: data[0].published_year,
            copies: data[0].copies,
            genre: data[0].id           
        });
        setEdit(true);
    };

    

    useEffect(()=>{
       if (params.id){
           loadBook(params.id);
       }
       loadGenre();
    },[params.id]);

    return(
        <Grid container direction="column" alignItems={'center'} justifyContent="center"  >
            <Grid item xs={3}>
                <Card sx={{mt:5}} className="CardBg">
                    <div  className='CardC'>
                        <div>
                    <Typography variant="h6"  color='white' >
                        {edit ? "Edit Book" : "Create Book"}
                    </Typography>
                    </div>
                    <Button variant="contained" onClick={()=> navigate("/books")} color="secondary" >Back</Button>
                    </div>
                    <CardContent>
                        <form onSubmit={handleSubmit} >
                            <TextField 
                                variant='outlined' 
                                placeholder='Title' 
                                label={edit ? "Title":"Title"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="title"
                                value={book.title}
                                onChange={handleChange}
                                fullWidth
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
                                placeholder='Author' 
                                label={edit ? "Author":"Author"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="author"
                                value={book.author}
                                onChange={handleChange}
                                fullWidth
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
                                placeholder='Published Year' 
                                label={edit ? "Published Year":"Published Year"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="published_year"
                                value={book.published_year}
                                onChange={handleChange}
                                fullWidth
                                helperText="numeric field"
                                onKeyDown={function (e) {
                                    if (e.keyCode!="8" && e.keyCode!="116" && (e.keyCode < '48' || e.keyCode > '57') && (e.keyCode < '96' || e.keyCode > '105') ) {
                                        e.preventDefault()
                                     }
                                 }}
                                inputProps={{
                                    inputMode: "numeric", 
                                    pattern:"[0-9]*",
                                    maxLength: 4,
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
                                placeholder='Copies' 
                                label={edit ? "Copies":"Copies"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem"
                                   
                                }}
                                color="secondary"
                                name="copies"
                                value={book.copies}
                                onChange={handleChange}
                                fullWidth
                                helperText="numeric field"
                                inputProps={{
                                    inputMode: "numeric", 
                                    pattern:"[0-9]*",
                                    maxLength: 4,
                                    
                                    max:2,
                                    style:{
                                        color:"white"
                                    }
                                }}
                                onKeyDown={function (e) {
                                    if (e.keyCode!="8" && e.keyCode!="116" && (e.keyCode < '48' || e.keyCode > '57') && (e.keyCode < '96' || e.keyCode > '105') ) {
                                        e.preventDefault()
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
                                placeholder='Genre' 
                                label={edit ? "Genre":"Genre"} 
                                sx={{
                                    display: "block",
                                    margin: "1rem",
                                    
                                   
                                }}
                                color="secondary"
                                name="genre"
                                select
                                fullWidth 
                                value={book.genre}
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
                            >
                            
                            {genre.map((genre) => (
                                <MenuItem key={genre.id} value={genre.id} >
                                {genre.genre}
                                </MenuItem>
                            ))}
                            </TextField>

                            {/* <TextField variant='outlined' placeholder='Genre' label="Ingress new genre" multiline rows={4}/> */}

                            <Button variant="contained" color="success" type="submit" disabled={!book.genre || !book.title ||!book.copies || !book.published_year || !book.author}  sx={{margin: "1rem"}} >
                                {loading ? <CircularProgress color='success' size={24}/> : "Save"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
    )
}