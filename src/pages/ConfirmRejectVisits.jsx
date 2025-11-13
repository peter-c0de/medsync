import React from 'react'
import { Button } from 'react-bootstrap'

function Pending({name, desc, address, when}){
  return (
    <div className="card-like mb-3" style={{background:'#fffbe7'}}>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3">
          <div className="item-avatar" />
          <div>
            <div className="item-title">{name} <span className="badge-type">Pending</span></div>
            <div className="req-desc">{desc}</div>
            <div className="req-meta">📅 {when} <span className="dot"/>📍 {address}</div>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <Button variant="success">Confirm Visit</Button>
          <Button variant="outline-danger">Reject Visit</Button>
          <Button variant="light" className="border">Message Patient</Button>
        </div>
      </div>
    </div>
  )
}

export default function ConfirmRejectVisits(){
  return (
    <div>
      <h2 className="fw-bold">Confirm / Reject Home Visits</h2>
      <p className="text-muted-small">Review and respond to home visit requests from patients</p>

      <h5 className="mt-3">Pending Requests (3)</h5>
      <Pending name="Linda Parker" desc="Post-surgery follow-up and wound care" address={'520 Berry Lane, Manhattan, NY 10006'} when={'Dec 21 at 3:00 PM'} />
      <Pending name="Marcus Johnson" desc={'Physical examination and diabetes management'} address={'789 Elm Road, Downtown, New York, NY 10003'} when={'Dec 22 at 11:00 AM'} />
      <Pending name="Patricia Anderson" desc={'Routine elderly care and medication review'} address={'654 Walnut Street, Brooklyn, NY 10007'} when={'Dec 23 at 2:30 PM'} />

      <h5 className="mt-4">Confirmed Visits (2)</h5>
      <div className="accepted-box item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">Elena Rodriguez <span className="badge-type green">Confirmed</span></div><div className="req-meta">Dec 19 at 4:00 PM • 321 Pine Street, Brooklyn, NY 10004</div></div></div><div><Button variant="light">Reschedule</Button><Button variant="outline-danger" className="ms-2">Cancel</Button></div></div>
      <div className="accepted-box item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">James Wilson <span className="badge-type green">Confirmed</span></div><div className="req-meta">Dec 20 at 10:30 AM • 987 Birch Avenue, Queens, NY 10008</div></div></div><div><Button variant="light">Reschedule</Button><Button variant="outline-danger" className="ms-2">Cancel</Button></div></div>

      <h5 className="mt-4">Rejected Requests</h5>
      <div className="card-like mb-3" style={{background:'#fff2f2'}}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center"><div className="item-avatar"/><div><div className="item-title">Kevin Thompson</div><div className="text-muted-small">Reason: Time slot not available • Rejected on Dec 18</div></div></div>
          <Button variant="light">View Details</Button>
        </div>
      </div>

      <div className="bottom-stats mt-3"><div className="small-card stats-card"> <div className="text-muted-small">Pending Reviews</div> <h3 className="fw-bold">3</h3></div><div className="small-card stats-card"> <div className="text-muted-small">Confirmed Visits</div> <h3 className="fw-bold text-success">2</h3></div><div className="small-card stats-card"> <div className="text-muted-small">Confirmation Rate</div> <h3 className="fw-bold text-primary">87%</h3></div></div>

    </div>
  )
}
