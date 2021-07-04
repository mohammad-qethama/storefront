import React from "react";
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    return (<Card className={classes.root} key={product.name}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {product.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price:{product.price}  <span>   </span>  inStock:{product.inventoryCount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
        Add To Cart
        </Button>
      </CardActions>
    </Card>)
  
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


export default connect(mapStateToProps)(Counter)

