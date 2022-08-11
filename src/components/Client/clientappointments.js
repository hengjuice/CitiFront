import React from "react";
import CalenderGrid from "../Calendar/calendar";
import ClientAppBar from "../Nav/client";

const ClientAppointments = () => {
    return (
        <div className="ClientAppointments"> 
            <ClientAppBar />
            <CalenderGrid />
        </div>
    );
};

export default ClientAppointments;