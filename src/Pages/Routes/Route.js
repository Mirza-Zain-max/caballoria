import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Login from '../Auth/Login';
// import Register from '../Auth/Register';
// import Forgot from '../Auth/Forgot';
// import PrivateRoutes from './PrivateRoutes';
// import PublicRoutes from './PublicRoutes';
// import AddRider from '../DashBoard/AddRider';
// import ShowData from '../DashBoard/ShowData';
// import RunSheet from '../DashBoard/RunSheet';
// import ViewSheet from '../DashBoard/ViewSheet';
// import TrackShipment from '../DashBoard/Tracking';
// import AddShipment from '../DashBoard/AddShipment';
import Dashboard from '../DashBoard/Dashboard';
import Index from '../DashBoard';
// import Boking from '../DashBoard/Booking';

const FrontEnd = () => {
  return (
    <Routes>
      {/* Public Routes (Accessible to everyone) */}
      {/* <Route element={<PublicRoutes />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot" element={<Forgot />} />
      </Route> */}

      {/* Private Routes (Only accessible to authenticated users) */}
      <Route path='/' element={<Index/>}/>
      {/* <Route element={<PrivateRoutes />}> */}
      {/* <Route path='/boking' element={<Boking/>} />
      <Route path='/booking' element={<AddShipment/>} />
        <Route path="/add" element={<AddRider />} />
        <Route path="/showData" element={<ShowData />} />
        <Route path="/make-delivery" element={<RunSheet />} />
        <Route path="/track-shipment" element={<TrackShipment />} />
        <Route path="/view-sheet" element={<ViewSheet />} /> */}
      {/* </Route> */}
    </Routes>

  );
};

export default FrontEnd;
