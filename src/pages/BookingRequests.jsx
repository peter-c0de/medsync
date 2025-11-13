import React from 'react'
import { Button } from 'react-bootstrap'

function Request({name, type, desc, date, sent}){
  return (
    <div className="item-box">
      <div className="item-left">
        <div className="item-avatar" />
        <div>
          <div className="item-title">{name} <span className={`badge-type ${type==='Online'?'blue':''}`}>{type==='Clinic'?'Clinic Visit':type==='Home'?'Home Visit':'Online Consultation'}</span></div>
          <div className="req-desc">{desc}</div>
          <div className="req-meta">📅 Requested: {date} <span className="dot"/> ⏱ {sent}</div>
        </div>
      </div>

      <div className="req-actions">
        <Button variant="success" size="sm" className="me-2">Accept</Button>
        <Button variant="outline-danger" size="sm">Decline</Button>
      </div>
    </div>
  )
}

export default function BookingRequests(){
  return (
    <div>
      <h2 className="fw-bold">Booking Requests</h2>
      <p className="text-muted-small">Review and manage incoming appointment requests</p>

      <h5 className="fw-bold mt-3">Pending Requests (4)</h5>
      <Request name="Rachel Green" type="Clinic" desc="General checkup and blood pressure monitoring" date="Tomorrow at 2:00 PM" sent="Sent 2 hours ago" />
      <Request name="Tom Hardy" type="Online" desc="Follow-up on medication side effects" date="Dec 20 at 10:30 AM" sent="Sent 4 hours ago" />
      <Request name="Linda Parker" type="Home" desc="Post-surgery follow-up and wound care" date="Dec 21 at 3:00 PM" sent="Sent 6 hours ago" />
      <Request name="Marcus Johnson" type="Clinic" desc="Physical examination and diabetes management" date="Dec 22 at 11:00 AM" sent="Sent 1 day ago" />

      <h5 className="fw-bold mt-5">Accepted Bookings (2)</h5>
      <div className="accepted-box item-box">
        <div className="item-left"><div className="item-avatar" /><div><div className="item-title">Victoria Stone <span className="badge-type green">Online Consultation</span></div><div className="req-meta">Dec 19 at 4:00 PM</div></div></div>
        <div className="req-actions"><Button variant="light" className="me-2">Reschedule</Button><Button variant="danger">Cancel</Button></div>
      </div>

      <div className="accepted-box item-box">
        <div className="item-left"><div className="item-avatar" /><div><div className="item-title">Adam Smith <span className="badge-type green">Clinic Visit</span></div><div className="req-meta">Dec 20 at 9:30 AM</div></div></div>
        <div className="req-actions"><Button variant="light" className="me-2">Reschedule</Button><Button variant="danger">Cancel</Button></div>
      </div>

      <div className="bottom-stats">
        <div className="small-card stats-card"> <div className="text-muted-small">Pending Requests</div> <h3 className="fw-bold">4</h3> <small className="text-muted-small">Awaiting response</small></div>
        <div className="small-card stats-card"> <div className="text-muted-small">Accepted This Week</div> <h3 className="fw-bold text-success">12</h3> <small className="text-muted-small">Confirmed bookings</small></div>
        <div className="small-card stats-card"> <div className="text-muted-small">Acceptance Rate</div> <h3 className="fw-bold text-primary">94%</h3> <small className="text-muted-small">This month</small></div>
      </div>

    </div>
  )
}
