import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const items = [
  { to: '/dashboard', icon: 'bi-speedometer2', label: 'Dashboard' },
  { to: '/manage-profile', icon: 'bi-person', label: 'Manage Profile' },
  { to: '/appointments', icon: 'bi-calendar-event', label: 'Appointments' },
  { to: '/booking-requests', icon: 'bi-calendar-check', label: 'Booking Requests' },
  { to: '/online-consultation', icon: 'bi-camera-video', label: 'Online Consultation' },
  { to: '/home-visits', icon: 'bi-geo-alt', label: 'Home Visits Map' },
  { to: '/confirm-reject', icon: 'bi-patch-check', label: 'Confirm/Reject Visits' },
  { to: '/patient-history', icon: 'bi-clock-history', label: 'Patient History' },
  { to: '/follow-ups', icon: 'bi-repeat', label: 'Follow-up Appointments' },
  { to: '/subscription', icon: 'bi-wallet2', label: 'Subscription' }
]

export default function Sidebar(){
  const loc = useLocation()
  return (
    <div className="sidebar">
      <div className="brand"> 
        <div className="logo">🩺</div>
        <div className="brand-text">MedSync Doctor</div>
      </div>

      <Nav className="flex-column mt-3">
        {items.map(i=> (
          <Nav.Item key={i.to} className={loc.pathname === i.to ? 'active' : ''}>
            <Nav.Link as={Link} to={i.to} className="sidebar-link">
              <i className={`bi ${i.icon} me-2`}></i>
              {i.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  )
}
