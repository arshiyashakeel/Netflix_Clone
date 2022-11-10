import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import { firebaseAuth } from "../utils/firebase-config";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSignup = async () => {
    const { email, password } = formValues;
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if (currentUser) navigate("/")
  })

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <div className="body flex column a-center j-center t-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={(e)=>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value
                })
              }  
            />
        { showPassword && ( 
           <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={(e)=>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value
                })
              } 
            />
            )}
            {!showPassword && (<button onClick={() => setshowPassword(true)}>Get Started</button>)}
          </div>
          {showPassword && (<button onClick={handleSignup}>Sign Up</button>)}
        </div>
      </div>
    </Container>
  );
}

export default Signup;
const Container = styled.div`
  position: realtive;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        .h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        width: 60%;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
