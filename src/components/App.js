import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import HomePage from './HomePage';
import NavBar from './NavBar';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import BooksContainer from './BooksContainer';
import API from './API';
import UserShowPage from './UserShowPage';

class  App extends Component{

  state = {
    username: null,
    searchTerm: null
  }

  signIn = (data) => {
    this.setState({ username: data.username })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
    localStorage.removeItem('token')
  }

  componentDidMount = () => {
    if(localStorage.token){
      API.validate()
      .then(data => {
        if (data.error) throw Error(data.error)
        this.signIn(data)
        this.props.history.push('/userbooks')
       
      })
      .catch(error => alert(error))
    }
  }

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value 
    })
  }

  // searchByBookName = () => {
  //   console.log( API.searchBooks(this.state.searchTerm))
  // }

  render(){
    return (
      <div className="column ">
        <div id="navbar" className="ui grid">
          <NavBar signOut={this.signOut} updateSearchTerm={this.updateSearchTerm}/>
        </div>
        <div className="row content-container">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' component={props => <SignInPage {...props} signIn={this.signIn}/>}/>
            <Route exact path='/signup' component={props => <SignUpPage {...props} signIn={this.signIn}/>} />
            <Route exact path='/userbooks' component={props => <UserShowPage {...props} username={this.state.username}/>}/>
            <Route component={props => <h1>404 - Page not found</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default withRouter(App)
