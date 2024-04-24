// import React, { useState } from 'react'
// import styled from "styled-components"
// import BackgroundImage from '../components/BackgroundImage'
// import Header from '../components/Header'
// import {firebaseAuth} from "../utils/firebase-config"
// import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
// import { useNavigate } from 'react-router-dom'


// export default function Login() {
// const [formValues,setFormValues]=useState({
//   email:"",
//   password:"",
// })
// const handleLogin=async()=>{
//   try {
//     //create a new user with firebase
//     const {email,password}=formValues;
//     await signInWithEmailAndPassword(firebaseAuth,email,password);
//   } catch (error) {
//     console.log(error)
//   }
// }
// //Redirect to home page
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const Navigate= useNavigate();
// onAuthStateChanged(firebaseAuth,(currentUser)=>{
//   if(currentUser) Navigate("/")
// })
//   return (
//     <Container>
//       <BackgroundImage/>
//       <div className="content">
//         <Header/>
//         <div className="form-container flex column a-center j-center">
//           <div className="form flex-column a-center j-center">
//             <div className="title">
//               <h3>Login</h3>
//             </div>
//             <div className="container flex column">
//             <input
//               type="email"
//               placeholder="Email address"
//               name="email"
//               //grab the event and change the form value
//               value={formValues.email}
//               onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value,})}

//             />
           

         
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formValues.password}
//               onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value,})}
              
//               />
//               <button onClick={handleLogin}>Log In</button>
            
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }
// // const Container = styled.div`
// //   position: relative;
// //   .content {
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     background-color: rgba(0, 0, 0, 0.5);
// //     height: 100vh;
// //     width: 100vw;
// //     display: grid;
// //     grid-template-rows: 15vh 85vh;
// //     .form-container{
// //       gap:2rem;
// //       height:85vh;
// //       .form{
// //         padding:2rem;
// //         background-color:#000000b0
// //         width:25vw;
// //         gap:2rem;
// //         color:white;
// //         .container{
// //           gap:2rem;
// //           input{
// //             padding:0.5rem 1rem;
// //             width:15rem;
// //           } 
// //           button{
// //             padding: 0.5rem 1rem;
// //             background-color: #e50914;
// //             border: none;
// //             cursor: pointer;
// //             color: white;
// //             border-radius: 0.2rem;
// //             font-weight: bolder;
// //             font-size: 1.05rem;
// //             width:15rem;
// //           }
// //         }
// //       }
// //     }
// //   }
// // `;
// const Container = styled.div`
//   position: relative;
//   .content {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 100vw;
//     background-color: rgba(0, 0, 0, 0.5);
//     grid-template-rows: 15vh 85vh;
//     .form-container {
//       gap: 2rem;
//       height: 85vh;
//       .form {
//         padding: 2rem;
//         background-color: #000000b0;
//         width: 25vw;
//         gap: 2rem;
//         color: white;
//         .container {
//           gap: 2rem;
//           input {
//             padding: 0.5rem 1rem;
//             width: 15rem;
//           }
//           button {
//             padding: 0.5rem 1rem;
//             background-color: #e50914;
//             border: none;
//             cursor: pointer;
//             color: white;
//             border-radius: 0.2rem;
//             font-weight: bolder;
//             font-size: 1.05rem;
//             width:15rem;
//           }
//         }
//       }
//     }
//   }
// `;
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
//Login function firebaseAuth
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };
//redirect the user to homepage
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
//styles

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
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
    }
  }
`;

export default Login;
