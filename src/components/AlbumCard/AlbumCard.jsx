import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip} from '@mui/material';
import styles from "../AlbumCard/AlbumCard.module.css";

 

const AlbumCard = ({ albumImage, albumName, follows, labelType  }) => {
  return (
    <div className= {styles.container}>
    <Card
    
     sx={{ height: '205px',}}
//     sx={{
//       width: '159px',
//     height: '205px',
// /* gap: 0px; */
//     borderRadius: '10px 10px 10px 10px',
    
//     overflow: 'hidden',
//    backgroundColor: 'rgba(255, 255, 255, 1)',

//     }}
    >
      {/* Album Image */}
      <CardMedia
        component="img"
        image={albumImage}  // Use the albumImage prop
        alt={`${albumName}`}
         
        sx={{height: '170px',
          width:'100%',
        }}
      />

      {/* Bottom section (Album name and Follows) */}
      <CardContent
        // style={{
        //   display: 'flex',
        //   justifyContent: 'space-between',
        //   alignItems: 'center',
        //   padding: '16px',
        
        // }}
        sx={{ padding: '8px' }}
      >
        {/* Album Name */}
        

        {/* Number of Follows using Chip */}
        <Chip
          label={`${follows} ${labelType === 'likes' ? 'Likes' : 'Follows'}`} 
          size="small"
          
          sx={{
            width: 'auto',
            height: '23px',
            Top:'176px',
            borderRadius: '10px',
            padding: '4px 8px 4px 8px',
            backgroundColor: 'black',
            fontFamily: 'Poppins',
            fontSize: '10px',
            fontWeight: 400,
            textAlign: 'center',
            lineHeight: '15px',
            color: 'rgba(255, 255, 255, 1);',
            
        }}
        />
       
      </CardContent>
    </Card>
    <Typography variant="h6" component="div"   
       sx={{
width: 'auto',
height: '27px',
fontFamily: 'Poppins',
fontSize: '14px',
fontWeight: 400,
lineHeight: '21px',
textAlign: 'left',
marginTop: '5px',
color: 'rgba(255, 255, 255, 1)',

}}
  >
          {albumName}
        </Typography>
    </div>
  );
};

export default AlbumCard;
