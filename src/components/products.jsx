import React from "react";
import {connect} from 'react-redux';
import {decrement} from '../store/products';
import { makeStyles } from '@material-ui/core/styles';
import {If,Then,Else} from 'react-if';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {putItems} from '../store/actions.js';
import './products.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minWidth:400,
    margin:30
  },
  media: {
    height: 140,
  },
 
});

const Counter = (props)=>{
  const classes = useStyles();
  

  return (
    <div className='cards'>
      
    {props.products.products.map(product => {
    return (


//       category: "food"
// description: "Delicious food "
// image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCV1nEn29DnjI4Yvdm1hca_eRNuW_OQmoXA&usqp=CAU"
// inventory: 27
// item: "Calzones"
// price: 85
// __v: 0
// _id: "60db30badf0edd0015581fea"
    
    <If condition = {product.visible && product.inventory} key={product.name}>
    <Then>
    <Card className={classes.root} key={product._id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.item}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
          {product.item}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price:{product.price}  <span>   </span>  inStock:{product.inventory}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{ props.putItems(product._id)}} >
          Add To Cart
        </Button>
        <Button size="small" color="primary">
        Details      
        </Button>
      </CardActions>
    </Card>
    </Then>
    <Else>
     <></>
   </Else>
  </If>
    
    )
  
 })}
 </div>
 );
}

// import {filter,restore} from '../store/products';




  // return(
  //   <section>
  //     <ul>
  //       {props.products.products.map(category=>{
  //                 return  (<li key={category.name}> 
  //            {category.name}
  //           </li>)
  //       })
  //       }
  //     </ul>
  //   </section>
  // )



const mapStateToProps = state =>({
  products: state.product
})

const mapDispatchToProps = {decrement,putItems} ;

export default connect( mapStateToProps,mapDispatchToProps )(Counter)

