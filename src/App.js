import React, {Component} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About'
import MonthsList from './containers/MonthsList'
import MonthSelected from './containers/MonthSelected';
import LoginForm from './components/LoginForm';
import Typography from '@mui/material/Typography'
import {connect} from 'react-redux'
import {setMonths} from './redux/actions/monthActionCreators'
// import {autoLogin} from './redux/actions/userActionCreators'
import {autoLogin, logout} from './redux/actions/userActionCreators'
import {Switch, Route} from 'react-router-dom'
// import EventEdit from './components/EventEdit';
// import {useEffect} from 'react'
// allows to make components appear based on what route i go to
class App extends Component {

  componentDidMount() {
    localStorage.token && this.props.autoLogin()
    // console.log("Going to fetch months next")
    this.props.setMonths()
  }
  // will run when App is rendered

  render() {
    // console.log(this.props)
    return (
      <>
        <header className="App-header">
          <Typography variant="h1">A Bowl Of Cherries</Typography>
          <hr />
        </header>
        {/* {this.props.user.username
        ? */}
        {/* if there is a user, render all routes & nav, otherwise, render login/signup form */}
        {this.props.user.id
        ?
          <>
          <NavBar />
          <button onClick={this.props.logout}>Logout</button>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* needs to be exact path or else it'll math anything with / */}
            <Route path="/about" component={About}/>
            <Route path="/months/:id" component={MonthSelected}/>
            <Route path="/months" component={MonthsList}/>
            {/* <Route path="/months/:id/events/:id" component={EventEdit}/> */}
            <Route path="*" component={Home} />
          </Switch>
          </>
        :
          <LoginForm />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

// export default connect(mapStateToProps, {setMonths, autoLogin})(App);
export default connect(mapStateToProps, {setMonths, autoLogin, logout})(App);

// export default connect(null, mapDispatchToProps)(App);
// dont have matchstatetoprops yet, so null

// export default connect(null, {star})(App);
// not easy to use if i do async action then wanna dispatch
// fetching is outside of scope of dispatch method