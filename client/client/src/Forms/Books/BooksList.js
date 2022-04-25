import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography,  Box, CardHeader } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

export default function BooksList(){
    const [book, setBook]=useState([]);
    const dir ="http://localhost:4000/book/";
    const editdir="/books/edit/";
    const navigate = useNavigate();

    const loadBook= async ()=>{
       const res = await fetch(dir);
       const data = await res.json();
       
       setBook(data);
    }

    useEffect(() => {
        loadBook();
    }, [])

    const handleDelete = async (id) =>{
        try{
            const res = await fetch(dir+id, {
                method: "DELETE",
                body: JSON.stringify(book),
                headers:{"Content-Type": "application/json"}, 
            })
    
            //const data = await res.json();
            setBook(book.filter(book=>book.idbook !== id));
        }
        catch (error){

        }
        
    }



    const columns=[
       /* { field: 'idbook', headerName: 'ID', width: 90 },*/
        {
            field: 'title',
            headerName: 'Title',
            width: 180,
            
        },
        {
            field: 'author',
            headerName: 'Author',
            width: 150,
            
        },
        {
            field: 'published_year',
            headerName: 'Year',
            
            width: 110,
            
        },
        {
            field: 'copies',
            headerName: 'Copies',
            
            width: 110,
            
        },
        {
            field: 'genre',
            headerName: 'Genre',
            
            width: 110,
           
        },
        {
            field: 'actions',
            headerName: 'Actions',
            
           
           
        },
    ];
    const rows=book;
    
    return(
        <div>
            <Box className="CardC">
            <h3>Book List</h3> 
            <Button variant="outlined" size="small" className="BtnD-margin" onClick={()=> navigate("/books/new")} color="secondary" >Add Book</Button>
            <Button variant="outlined" size="small" className="BtnD-margin" onClick={()=> navigate("/usersxbooks")} color="secondary" >Back</Button>
            </Box>
            {
                book.map((book) => (
                    <Card className="Card-inMap" key={book.idbook} >
                        {/* <CardHeader className="WhiteC ContentL" disableTypography="false" title={book.title}>
                           
                        </CardHeader> */}
                        <CardContent  className="CardCF">
                        <div className="WhiteC ContentL">
                            <Typography> {book.title} </Typography>
                            {/* <Typography className="WhiteC ContentL"> {book.author} </Typography>
                            <Typography className="WhiteC ContentL"> {book.published_year} </Typography>
                            <Typography className="WhiteC ContentL"> {book.copies} </Typography>
                            <Typography className="WhiteC ContentL"> {book.genre} </Typography> */}
                            
                        </div>
                        <div>
                            <Button variant="contained" color="warning" onClick={()=> navigate(editdir+book.idbook)} >Edit</Button>
                            <Button variant="contained" color="error" onClick={()=> handleDelete(book.idbook)} className="BtnD-margin">Delete</Button>
                        </div>
                        
                            
                        </CardContent>
                    </Card>
                ))
            }
            
            <DataGrid
                 rows={rows}
                 columns={columns}
                 pageSize={5}
                 rowsPerPageOptions={[5]}
                 disableSelectionOnClick
                 getRowId={(row) => row.idbook}
                 className="Height"
                 
            />
            
            
        </div>
    )
}