import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebaseConfig from "./firebaseConfig.js";
import firebase from "firebase/app";
import "firebase/auth";
import withFirebaseAuth from "react-with-firebase-auth";

import { Router } from "@reach/router";
import { getAnimals } from "./Components/DataRequests.jsx";
import Login from "./Components/Login.jsx";
import NavbarLinks from "./Components/NavbarLinks.jsx";
import Homepage from "./Components/Homepage.jsx";
import Management from "./Components/Management.jsx";
import About from "./Components/About.jsx";
import Boars from "./Components/Boars.jsx";
import Sows from "./Components/Sows.jsx";
import GPCareTips from "./Components/GPCareTips.jsx";
import Bucks from "./Components/Bucks.jsx";
import Does from "./Components/Does.jsx";
import RabbitCareTips from "./Components/RabbitCareTips.jsx";
import Grooming from "./Components/Grooming.jsx";
import Boarding from "./Components/Boarding.jsx";
import Adoption from "./Components/Adoption.jsx";
import Donations from "./Components/Donations.jsx";
import Sponsor from "./Components/Sponsor.jsx";
import Contact from "./Components/Contact.jsx";
import IndividualBoar from "./Components/IndividualBoar.jsx";
import IndividualSow from "./Components/IndividualSow.jsx";
import IndividualBuck from "./Components/IndividualBuck.jsx";
import IndividualDoe from "./Components/IndividualDoe.jsx";
import IndividualSponsor from "./Components/IndividualSponsor.jsx";
import ErrorDisplay from "./Components/ErrorDisplay";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {
  state = {
    animals: [],
    err: null,
    newAnimal: "false",
    isLoading: true,
  };

  componentDidMount() {
    this.handleDataRequest();
  }

  handleDataRequest = () => {
    getAnimals()
      .then((animals) => {
        this.setState({ animals, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            response,
          },
        });
      });
  };

  handleValue = (value) => {
    this.handleNewAnimal();
    this.setState({ newAnimal: value });
  };

  handleNewAnimal = () => {
    if (this.state.newAnimal === "true") {
      this.handleDataRequest();
    }
  };

  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    const { animals, isLoading } = this.state;
    return (
      <div className="App">
        <Login
          user={user}
          signOut={signOut}
          signInWithGoogle={signInWithGoogle}
        />
        <NavbarLinks />

        <Router primary={false}>
          {this.state.err !== null && <ErrorDisplay err={this.state.err} />}
          <Homepage path="/" />
          <About path="/about" />
          <Boars path="/boars" animals={animals} isLoading={isLoading} />
          <Sows path="/sows" animals={animals} isLoading={isLoading} />
          <GPCareTips path="/GPCareTips" />
          <Bucks path="/bucks" animals={animals} isLoading={isLoading} />
          <Does path="/does" animals={animals} isLoading={isLoading} />
          <RabbitCareTips path="/rabbitCareTips" />
          <Grooming path="/grooming" />
          <Boarding path="/boarding" />
          <Adoption path="/adoption" />
          <Donations path="/donations" />
          <Sponsor path="/sponsor" animals={animals} />
          <Contact path="/contactUs" animals={animals} />
          <IndividualBoar
            path="/boars/:id"
            animals={animals}
            isLoading={isLoading}
          />
          <IndividualSow
            path="/sows/:id"
            animals={animals}
            isLoading={isLoading}
          />
          <IndividualBuck
            path="/bucks/:id"
            animals={animals}
            isLoading={isLoading}
          />
          <IndividualDoe
            path="/does/:id"
            animals={animals}
            isLoading={isLoading}
          />
          <IndividualSponsor
            path="/sponsor/:id"
            animals={animals}
            isLoading={isLoading}
          />

          {user ? (
            user.email === "EMAIL GOES HERE" ||
            "EMAIL GOES HERE" ||
            "EMAIL GOES HERE" ? (
              <Management path="/management" handleValue={this.handleValue} />
            ) : null
          ) : null}

          <ErrorDisplay default err={{ status: 404, msg: "Page not found" }} />
        </Router>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
