import React, {Component} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About'
import MonthsList from './containers/MonthsList'
import MonthSelected from './containers/MonthSelected';
import LoginForm from './components/LoginForm';
import Typography from '@mui/material/Typography'
import { connect } from 'react-redux'
import { setMonths } from './redux/actions/monthActionCreators'
import { autoLogin, logout } from './redux/actions/userActionCreators'
import { Switch, Route } from 'react-router-dom'
class App extends Component {

  componentDidMount() {
    localStorage.token && this.props.autoLogin()
    this.props.setMonths()
  }

  render() {
    return (
      <>
        <header className="App-header">
          <Typography variant="h1">A Bowl Of Cherries</Typography>
          <hr />
        </header>
        {this.props.user.id
        ?
          <>
          <NavBar />
          <button onClick={this.props.logout}>Logout</button>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/months" component={MonthsList}/>
            <Route path="/months/:id" component={MonthSelected}/>
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

export default connect(mapStateToProps, {setMonths, autoLogin, logout})(App);