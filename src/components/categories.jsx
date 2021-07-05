import React,{useEffect} from "react";
import {connect} from 'react-redux';

import {activeCategory} from '../store/catagories';

import {filter,restore} from '../store/products';


import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import './categories.css';


const Counter = (props)=>{


  useEffect(()=>props.restore(),[])

  return(
    <section>
      
         <Breadcrumbs aria-label="breadcrumb">
           <ul>
        <li onClick={()=>{props.activeCategory('all');props.restore()} }> ALL </li>
        {props.categories.categories.map(category=>{
                  return  (<li onClick={()=>{props.activeCategory(category.name); props.filter(category.name)}}  key={category.name}> 
             {category.displayName}
            </li>)
        })
        }
       
      </ul>
      </Breadcrumbs>
    </section>
  )

}

const mapStateToProps = state =>({
  categories: state.category
})

const mapDispatchToProps = {activeCategory,filter,restore} ;

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

