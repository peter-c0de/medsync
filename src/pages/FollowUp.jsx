import React from 'react'
import { Form, Button } from 'react-bootstrap'

function FollowItem({name, title, date, tag}){
  return (
    <div className="item-box">
      <div className="item-left">
        <div className="item-avatar" />
        <div>
          <div className="item-title">{name} <span className="badge-type">Follow-up</span></div>
          <div className="req-desc">{title}</div>
          <div className="req-meta">📅 {date} <span className="dot"/> <span className="badge-type blue">{tag}</span></div>
        </div>
      </div>
      <div className="req-actions"><Button variant="outline-secondary" size="sm">✎</Button><Button variant="outline-danger" size="sm" className="ms-2">🗑</Button></div>
    </div>
  )
}

export default function FollowUp(){
  return (
    <div>
      <h2 className="fw-bold">Follow-up Appointments</h2>
      <p className="text-muted-small">Manage follow-up visits with special pricing options</p>

      <div className="card-like mt-3">
        <h5>Schedule New Follow-up</h5>
        <div className="d-flex gap-3 mt-2">
          <Form.Select className="form-control"><option>Choose patient</option></Form.Select>
          <Form.Control placeholder="Follow-up Type" className="form-control" />
          <Form.Control placeholder="mm/dd/yyyy" className="form-control" />
          <Form.Control placeholder="--:--" className="form-control" />
        </div>
        <Button variant="primary" className="mt-3">Schedule Follow-up</Button>
      </div>

      <h5 className="mt-4">Scheduled Follow-ups (4)</h5>
      <FollowItem name="Sarah Anderson" title="Hypertension Check" date="Dec 25, 2024 • 10:30 AM" tag="Free" />
      <FollowItem name="John Smith" title="Asthma Assessment" date="Dec 26, 2024 • 2:00 PM" tag="50% Discount" />
      <FollowItem name="Michael Brown" title="Heart Disease Management" date="Dec 27, 2024 • 11:00 AM" tag="Free" />
      <FollowItem name="Lisa Wilson" title="Post-Surgery Check" date="Dec 29, 2024 • 3:30 PM" tag="30% Discount" />

      <h5 className="mt-4">Completed Follow-ups (2)</h5>
      <div className="accepted-box item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">Emma Davis</div><div className="req-meta">Dec 18, 2024 • 1:00 PM</div></div></div><div><Button variant="light">View Notes</Button></div></div>
      <div className="accepted-box item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">David Chen</div><div className="req-meta">Dec 17, 2024 • 10:00 AM</div></div></div><div><Button variant="light">View Notes</Button></div></div>

      <div className="bottom-stats mt-3"><div className="small-card stats-card"> <div className="text-muted-small">Scheduled Follow-ups</div><h3 className="fw-bold">4</h3></div><div className="small-card stats-card"><div className="text-muted-small">This Month Revenue</div><h3 className="fw-bold">$1,250</h3></div><div className="small-card stats-card"><div className="text-muted-small">Free Follow-ups</div><h3 className="fw-bold">2</h3></div></div>
    </div>
  )
}
