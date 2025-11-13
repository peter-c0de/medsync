import React from 'react'
import { Form, Button } from 'react-bootstrap'

function AppointmentItem({name, type, time, meta, status}){
  return (
    <div className="item-box">
      <div className="item-left">
        <div className="item-avatar" />
        <div>
          <div className="item-title">{name} <div className="text-muted-small">{type}</div></div>
          <div className="item-meta">{meta}</div>
        </div>
      </div>
      <div>
        <span className={`status ${status==='Confirmed'?'confirmed':status==='Pending'?'pending':''}`}>{status}</span>
        <Button variant="outline-secondary" size="sm" className="ms-2">✎</Button>
        <Button variant="outline-danger" size="sm" className="ms-2">✖</Button>
      </div>
    </div>
  )
}

export default function Appointments(){
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
