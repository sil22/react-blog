import React, { Component } from "react";
import { connect } from "react-redux"; //nos permite tener acceso al state y a nuestra store
import axios from 'axios';
import Pagination from '../Pagination.js'

class Home extends Component {
  //este metodo que se ejecuta solo una vez. Ideal para cargar nuestras llamadas a los servidores
  //metodo que contiene "Component"
  componentDidMount(){
    this.props.dispatch();
  }

  componentWillUnmount() {
    this.props.clear();
  }

  allPosts = () => {
    const Posts = this.props.allPosts.map((post) => {
      return (
        <h4 key={post.id}>{post.title}</h4>
      )
    })
    return Posts;
  }
  render() {
    return(
      <div>
        <h2>
           Home
       </h2>
       <Pagination/>
       {this.allPosts()}

      </div>
    )
  }

}
// const Home = (props) => {
 
//   return (
//     <div>
//       <h2>
//           Home
//       </h2>
//       {Posts}
//     </div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts 
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => {
      axios.get('https://blog-api-u.herokuapp.com/v1/posts')
      .then(function(response){
        console.log(response);
        dispatch({
          type: "DATA_LOADED",
          data: response.data
        })
      })
      .catch(function(error){
        console.log(error);
        
      })
    } ,
    clear: () => {
      dispatch({type: "CLEAR_DATA"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);