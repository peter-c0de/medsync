import React from 'react'
import { Button } from 'react-bootstrap'

export default function OnlineConsultation(){
  return (
    <div>
      <h2 className="fw-bold">Online Consultation</h2>
      <p className="text-muted-small">Manage video and audio consultations with patients</p>

      <div className="card-like mt-3" style={{display:'flex', gap:12}}>
        <div style={{flex:1, height:220, borderRadius:12, background:'#0f1724'}}></div>
        <div style={{flex:1, height:220, borderRadius:12, background:'#1e66ff', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center'}}>Sophie Turner</div>
      </div>

      <h5 className="mt-4">Upcoming Consultations (3)</h5>
      <div className="item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">Emma Davis</div><div className="req-meta">Today • 11:30 AM</div></div></div><div><Button variant="primary">Join Video</Button><Button variant="light" className="border ms-2">Reschedule</Button></div></div>
      <div className="item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">Jessica Brown</div><div className="req-meta">Today • 2:00 PM</div></div></div><div><Button variant="primary">Join Call</Button><Button variant="light" className="border ms-2">Reschedule</Button></div></div>
      <div className="item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">Lisa Wong</div><div className="req-meta">Tomorrow • 10:00 AM</div></div></div><div><Button variant="primary">Join Video</Button><Button variant="light" className="border ms-2">Reschedule</Button></div></div>

      <h5 className="mt-4">Past Consultations</h5>
      <div className="card-like item-box"><div className="item-left"><div className="item-avatar"/><div><div className="item-title">Maria Garcia</div><div className="req-meta">Yesterday • 3:30 PM • 25 mins</div></div></div><div><Button variant="light">View Notes</Button></div></div>

    </div>
  )
}
