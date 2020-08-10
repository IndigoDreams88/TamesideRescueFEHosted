import React from "react";
import styles from "../CSS/Login.module.css";
import { Image, Button } from "react-bootstrap";
import { Link } from "@reach/router";

export default function Login({ user, signOut, signInWithGoogle }) {
  return (
    <div className={styles.loginContainer}>
      {user ? (
        user.email === "roberthaworth458@gmail.com" ||
        "svidler2011@gmail.com" ||
        "tamesiderescue@gmail.com" ? (
          <p className={styles.greeting}>Hello, {user.displayName}</p>
        ) : null
      ) : null}
      {user ? (
        user.email === "roberthaworth458@gmail.com" ||
        "svidler2011@gmail.com" ||
        "tamesiderescue@gmail.com" ? (
          <>
            <Image
              src="/signOut.png"
              roundedCircle
              className={styles.signOutBtn}
              alt="log out logo"
              onClick={signOut}
            />
            <Link to="/management">
              <Button variant="secondary" className="mx-3">
                Management
              </Button>
            </Link>
          </>
        ) : null
      ) : (
        <Image
          src="./signin.png"
          roundedCircle
          onClick={signInWithGoogle}
          className={styles.signIn}
          alt="person logo"
        />
      )}
    </div>
  );
}
