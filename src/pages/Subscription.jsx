import React from 'react'
import { Button } from 'react-bootstrap'

export default function Subscription(){
  return (
    <div>
      <h2 className="fw-bold">Subscription & Billing</h2>
      <p className="text-muted-small">Manage your subscription plan and payment methods</p>

      <div className="card-like mt-3" style={{background:'linear-gradient(90deg,#e8f7ff,#eafbf0)'}}>
        <h5>Premium Plan</h5>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <h3>$99 <small className="text-muted">/month</small></h3>
            <ul>
              <li>Unlimited patient consultations</li>
              <li>Home visit scheduling</li>
              <li>Advanced analytics</li>
              <li>Custom branding</li>
            </ul>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div className="badge-type green">active</div>
            <div className="mt-2"><Button variant="outline-primary" className="me-2">Upgrade Plan</Button><Button variant="outline-danger">Cancel Subscription</Button></div>
          </div>
        </div>
      </div>

      <h5 className="mt-4">Other Plans</h5>
      <div className="d-flex gap-3">
        <div className="small-card" style={{flex:1}}><h5>Basic</h5><h3>$49</h3><Button variant="primary">Switch to Basic</Button></div>
        <div className="small-card" style={{flex:1, border:'2px solid #cfe4ff'}}><h5>Premium</h5><h3>$99</h3><Button variant="primary">Current</Button></div>
        <div className="small-card" style={{flex:1}}><h5>Enterprise</h5><h3>$199</h3><Button variant="primary">Switch to Enterprise</Button></div>
      </div>

      <div className="card-like mt-4">
        <h5>Payment Method</h5>
        <div className="item-box"><div className="d-flex gap-3 align-items-center"><i className="bi bi-credit-card"></i><div>Visa ending in 4242<br/><small className="text-muted-small">Expires 12/26</small></div></div><div><Button variant="light" className="me-2">Edit</Button><Button variant="outline-danger">Remove</Button></div></div>
      </div>

      <div className="card-like mt-4">
        <h5>Billing History</h5>
        <div className="mt-3">
          <div className="item-box"><div>Dec 1, 2024 — Premium Plan - INV-202412-001</div><div><span className="badge-type green">paid</span> <b>$99.00</b></div></div>
          <div className="item-box"><div>Nov 1, 2024 — Premium Plan - INV-202411-001</div><div><span className="badge-type green">paid</span> <b>$99.00</b></div></div>
        </div>
      </div>

      <div className="card-like mt-3" style={{background:'#fffbe7'}}>
        <div className="d-flex align-items-center gap-3"><i className="bi bi-info-circle"></i><div><b>Subscription Renewal</b><div className="text-muted-small">Your Premium plan will be renewed on January 1, 2025 for $99.00. If you wish to cancel or change your plan, please do so before the renewal date.</div></div></div>
      </div>

    </div>
  )
}
