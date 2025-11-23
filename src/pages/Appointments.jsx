import React from 'react'
import { Form, Button } from 'react-bootstrap'

function AppointmentItem({name, type, time, meta, status}){
  return (
    <div className="item-box">
      <div className="item-left">
        <div className="item-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div>
          <div className="item-title">{name} <div className="text-muted-small">{type}</div></div>
          <div className="item-meta">{meta}</div>
        </div>
      </div>
      <div>
        <span className={`status ${status==='Confirmed'?'confirmed':status==='Pending'?'pending':''}`}>{status}</span>
        <Button variant="outline-secondary" size="sm" className="ms-2">Edit</Button>
        <Button variant="outline-danger" size="sm" className="ms-2">Delete</Button>
      </div>
    </div>
  )
}

function Appointments(){
  return (
    <div>
      <h2 className="fw-bold">Manage Appointments</h2>
      <p className="text-muted-small">View and manage all your scheduled appointments</p>

      <div className="card-like mt-3">
        <h5>Filter Appointments</h5>
        <div className="d-flex gap-3 mt-2">
          <Form.Control placeholder="mm/dd/yyyy" className="form-control" />
          <Form.Select className="form-control"><option>All Types</option></Form.Select>
          <Form.Select className="form-control"><option>All Status</option></Form.Select>
          <Button variant="primary">Search</Button>
        </div>
      </div>

      <div className="mt-3">
        <AppointmentItem name="Sarah Anderson" type="Clinic Visit" meta="Today • 10:30 AM • 30 mins • Main Clinic, Room 101" status="Confirmed" />
        <AppointmentItem name="John Smith" type="Online Consultation" meta="Today • 11:15 AM • 30 mins • Video Call" status="Confirmed" />
        <AppointmentItem name="Emma Davis" type="Home Visit" meta="Today • 2:00 PM • 45 mins • 123 Oak Street, Apt 4B" status="Pending" />
      </div>

      <div className="card-like mt-4">
        <h5>Add New Appointment</h5>
        <div className="d-flex gap-3 mt-2">
          <Form.Control placeholder="Enter patient name" className="form-control" />
          <Form.Control placeholder="mm/dd/yyyy" className="form-control" />
          <Form.Control placeholder="--:--" className="form-control" />
          <Form.Select className="form-control"><option>Select type</option></Form.Select>
        </div>
        <Button variant="primary" className="mt-3">Create Appointment</Button>
      </div>
    </div>
  )
}

export default Appointments;