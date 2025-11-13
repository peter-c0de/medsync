import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import ManageProfile from './pages/ManageProfile'
import Appointments from './pages/Appointments'
import BookingRequests from './pages/BookingRequests'
import OnlineConsultation from './pages/OnlineConsultation'
import HomeVisitsMap from './pages/HomeVisitsMap'
import ConfirmRejectVisits from './pages/ConfirmRejectVisits'
import PatientHistory from './pages/PatientHistory'
import FollowUp from './pages/FollowUp'
import Subscription from './pages/Subscription'

export default function App() {
  return (
    <div className="app-root">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col xs={12} md={3} lg={2} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col xs={12} md={9} lg={10} className="main-col">
            <Topbar />
            <div className="main-content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/manage-profile" element={<ManageProfile />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/booking-requests" element={<BookingRequests />} />
                <Route path="/online-consultation" element={<OnlineConsultation />} />
                <Route path="/home-visits" element={<HomeVisitsMap />} />
                <Route path="/confirm-reject" element={<ConfirmRejectVisits />} />
                <Route path="/patient-history" element={<PatientHistory />} />
                <Route path="/follow-ups" element={<FollowUp />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
