import React from 'react'
import {Box, Container , styled , Typography} from '@mui/material'
import { Data } from '../../components/Data/Data'
import CustomCard from '../../components/customCard/CustomCard'



const Dishes = () => {

  const PropertyTextBox = styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
    },
  }))

  const DishesBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    marginTop:theme.spacing(5),
    [theme.breakpoints.down('md')]:{
      flexDirection:"column",
      alignItems:"center"
    },
  }))

  return (
    <Box sx={{ mt:5, backgroundColor:'#FSFAFE', py:10}}>
      <Container>
        <PropertyTextBox>
          <Typography sx={{color:'#000339', fontSize:'35px', fontWeight:'bold', ml:'13px'}}>
            Featured Dishes
          </Typography>
          
          <Typography sx={{color:'#SA6473', fontSize:'16px', mt:1 , ml:'13px'}}>
            Explore variety of South Indian Dishes
          </Typography>
        </PropertyTextBox>
        <DishesBox>
          {Data.map((item)=>(
            <CustomCard 
              key={item.id}
              img={item.img}
              price={item.price}
              item={item.item}
              likes={item.likes}
              heart={item.heart}
              share={item.share}/>
          ))}
        </DishesBox>
      </Container>

    </Box>
  )
}

export default Dishes