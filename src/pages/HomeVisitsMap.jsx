import React from 'react'
import { Button } from 'react-bootstrap'

function VisitItem({name, address, time, dist, status}){
  return (
    <div className="item-box">
      <div className="item-left">
        <div className="item-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div><div className="item-title">{name} <span className="badge-type blue">{status}</span></div><div className="req-meta">📍 {address} <span className="dot"/> {time} <span className="dot"/> {dist} km away</div></div></div>
      <div className="d-flex flex-column gap-2"><Button variant="primary">Navigate</Button><Button variant="light" className="border">Call</Button><Button variant="light" className="border">Message</Button></div>
    </div>
  )
}

function HomeVisitsMap(){
  return (
    <div>
      <h2 className="fw-bold">Home Visits Map</h2>
      <p className="text-muted-small">View all patient home visit locations and manage visits</p>

      <div className="card-like mt-3" style={{height:260}}>
        {/* Map placeholder */}
        <div style={{width:'100%', height:'100%', background:'linear-gradient(180deg,#eef9f8,#f6f9fb)', borderRadius:8}}></div>
      </div>

      <h5 className="mt-4">Scheduled Home Visits (3)</h5>
      <VisitItem name="Michael Brown" address={'123 Oak Street, Apt 4B, New York, NY 10001'} time={'Today • 2:00 PM'} dist={'2.3'} status={'scheduled'} />
      <VisitItem name="Sarah Wilson" address={'456 Maple Avenue, Suite 202, New York, NY 10002'} time={'Today • 3:30 PM'} dist={'3.1'} status={'scheduled'} />
      <VisitItem name="David Chen" address={'789 Elm Road, Downtown, New York, NY 10003'} time={'Today • 4:45 PM'} dist={'4.8'} status={'pending'} />

      <h5 className="mt-4">Completed Home Visits</h5>
      <div className="accepted-box item-box"><div className="item-left">
        <div className="item-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div><div className="item-title">Jennifer Lee</div><div className="req-meta">321 Pine Street, Brooklyn, NY 10004 • Completed Yesterday</div></div></div><div><Button variant="light">View Report</Button></div></div>
      <div className="accepted-box item-box"><div className="item-left">
        <div className="item-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div><div className="item-title">Robert Martinez</div><div className="req-meta">654 Cedar Lane, Queens, NY 10005 • Completed 2 days ago</div></div></div><div><Button variant="light">View Report</Button></div></div>
    </div>
  )
}

export default HomeVisitsMap;