import React from 'react'
import Paper from '@material-ui/core/Paper';
import {Typography,Grid,Button,Accordion,AccordionDetails,AccordionSummary,Expand} from '@material-ui/core';
import {useSelector,useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom'
import {putItems} from '../store/actions';

import './productDetails.css'


const  ProductDetails= (props)=> {

  const dispatch = useDispatch();
  const state= useSelector(state=>{
    return {
      items:state.product 
    }
  })
  const location = useLocation();
  
  console.log(location.pathname.split('/')[1] )
  return (

    <div className='paperD'>
      {console.log(state.items)}
      { state.items.products
        .filter(product=>{ console.log(product._id,'infilter',location.pathname.split('/'))
          return product._id === location.pathname.split('/')[2]})
          .map(product=>{
               return(
                    <Paper elevation = {3}>
                    <Typography variant="h1" component="h3">
                    {product.item}
                    </Typography>

                    <Typography variant="h5" component="h6">
                       {product.description}
                    </Typography>

                    <img src={product.image} alt={product.item} />
                      <Paper elevation={6}>

                    
                      <Grid container spacing={3}>
                              <Grid item xs={6}>
                              <Typography variant="h5" component="h3">
                              in Stoke : {product.inventory}
                            </Typography>
                             </Grid>
                          <Grid item xs={6}>
                          <Typography variant="h5" component="h3">
                              Price : {product.price}
                            </Typography>
                        </Grid>

                      </Grid>

                   
                      </Paper>     
                      <Button className='btnPD' color="primary"  onClick={()=>{ dispatch(putItems(product._id))}}>Buy</Button>
                 </Paper>

            
            )
          }
         )
      }
      <div>

    <Accordion>
    <AccordionSummary
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
   <Typography >Users Review</Typography>
  </AccordionSummary>
  <AccordionDetails>
     <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
   </Typography>
 </AccordionDetails>
</Accordion>  
<Accordion>
    <AccordionSummary
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
   <Typography >Similar Products</Typography>
  </AccordionSummary>
  <AccordionDetails>
     <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
        </Typography>
    </AccordionDetails>
 </Accordion>  
</div>
    </div>
  )
}


export default ProductDetails;