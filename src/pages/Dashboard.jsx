import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function StatCard({label, value, note}){
  return (
    <div className="stat-card card-like">
      <div className="label text-muted-small">{label}</div>
      <div className="value">{value}</div>
      <div className="text-success small">{note}</div>
    </div>
  )
}

export default function Dashboard(){
  return (
    <div>
      <h2 className="fw-bold">Doctor Dashboard</h2>
      <p className="text-muted-small">Welcome back! Here's your performance overview.</p>

      <div className="stats-row my-3">
        <StatCard label="Total Patients" value="248" note="+12%" />
        <StatCard label="Revenue (This Month)" value="$8,450" note="+8%" />
        <StatCard label="Appointments Today" value="6" note="2 pending" />
        <StatCard label="Consultation Hours" value="32" note="This month" />
      </div>

      <Row>
        <Col lg={8} className="me-3">
          <div className="card-like">
            <h5>Upcoming Appointments Today</h5>
            <div className="item-box mt-3">
              <div className="item-left">
                <div className="item-avatar" />
                <div>
                  <div className="item-title">Sarah Anderson</div>
                  <div className="item-desc">10:30 AM • Clinic Visit</div>
                </div>
              </div>
              <Button variant="outline-primary" size="sm">Start</Button>
            </div>
            <div className="item-box">
              <div className="item-left">
                <div className="item-avatar" />
                <div>
                  <div className="item-title">John Smith</div>
                  <div className="item-desc">11:15 AM • Online Consultation</div>
                </div>
              </div>
              <Button variant="outline-primary" size="sm">Start</Button>
            </div>
            <div className="item-box">
              <div className="item-left">
                <div className="item-avatar" />
                <div>
                  <div className="item-title">Emma Davis</div>
                  <div className="item-desc">2:00 PM • Home Visit</div>
                </div>
              </div>
              <Button variant="outline-primary" size="sm">Start</Button>
            </div>
          </div>
        </Col>

        <Col lg={3}>
          <div className="card-like">
            <h6>Revenue Overview</h6>
            <div className="mt-3">
              <div className="d-flex justify-content-between"><small>Total Earnings</small><b>$8,450</b></div>
              <div className="progress my-2"><div className="progress-bar" style={{width:'100%', background:'#37b24d'}}></div></div>

              <div className="d-flex justify-content-between"><small>Clinic Visits</small><b>$5,200</b></div>
              <div className="progress my-2"><div className="progress-bar" style={{width:'75%', background:'#228be6'}}></div></div>

              <div className="d-flex justify-content-between"><small>Online Consultations</small><b>$2,100</b></div>
              <div className="progress my-2"><div className="progress-bar" style={{width:'45%', background:'#845ef7'}}></div></div>

              <div className="d-flex justify-content-between"><small>Home Visits</small><b>$1,150</b></div>
              <div className="progress my-2"><div className="progress-bar" style={{width:'30%', background:'#f7831a'}}></div></div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="card-like mt-4">
        <h5>Recent Activity</h5>
        <div className="mt-3">
          <div className="item-box">
            <div className="item-left">
              <div className="item-avatar" />
              <div>
                <div className="item-title">Sarah Anderson</div>
                <div className="item-desc">Booked appointment</div>
              </div>
            </div>
            <div className="text-muted-small">2 hours ago</div>
          </div>

          <div className="item-box">
            <div className="item-left">
              <div className="item-avatar" />
              <div>
                <div className="item-title">John Smith</div>
                <div className="item-desc">Started online consultation</div>
              </div>
            </div>
            <div className="text-muted-small">4 hours ago</div>
          </div>
        </div>
      </div>

    </div>
  )
}
