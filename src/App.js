import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { MentorsPage } from "./pages/MentorsPage/MentorsPage";
import { Registerpage } from "./pages/Registerpage/Registerpage";
import { Signinpage } from "./pages/Signinpage/Signinpage";
import { AboutUs } from "./pages/Aboutus/Aboutus";
import { MentorApply } from "./pages/MentorApply/MentorApply";
import { MentorForm } from "./pages/MentorForm/MentorForm";
import BookSession from "./pages/BookSession/BookSession";
import { withRouter } from "react-router";
import firebase from "firebase";
import { connect } from "react-redux";
import { setUser } from "./redux/user/user-actions";

const App = ({ setUserInfo, history }) => {
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        firebase
          .firestore()
          .collection("users")
          .onSnapshot((ref) => {
            const userData = ref.docs
              .map((doc) => doc.data())
              .filter((user) => user.uid === uid)[0];
            setUserInfo(userData);
            history.push("/");
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/booksession/:mentorId" component={BookSession} />
        <Route path="/mentorform" component={MentorForm} />
        <Route path="/apply" component={MentorApply} />
        <Route path="/about" component={AboutUs} />
        <Route path="/mentors" component={MentorsPage} />
        <Route path="/signin" component={Signinpage} />
        <Route path="/register" component={Registerpage} />
        <Route path="/" component={Landingpage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (data) => dispatch(setUser(data)),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
