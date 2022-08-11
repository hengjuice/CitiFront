import React from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./Login";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../Nav/nav";
import { useEffect } from "react";

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
         navigate("/Login")   
        })

    };
export default Logout;