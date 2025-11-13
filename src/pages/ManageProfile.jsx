import React from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'

export default function ManageProfile(){
  return (
    <div>
      <h2 className="fw-bold">Manage Profile</h2>
      <p className="text-muted-small">Update your professional information and settings</p>

      <div className="card-like mt-3">
        <h5>Profile Information</h5>
        <Row className="g-3 mt-2">
          <Col md={3} className="text-center">
            <div className="profile-photo mb-2" />
            <Button variant="light" className="border">Change Photo</Button>
          </Col>
          <Col md={9}>
            <Form>
              <Row className="g-3">
                <Col md={6}><Form.Label>Full Name</Form.Label><Form.Control className="form-control" defaultValue="Dr. Michael Johnson"/></Col>
                <Col md={6}><Form.Label>Specialization</Form.Label><Form.Control className="form-control" defaultValue="Cardiologist"/></Col>
                <Col md={6}><Form.Label>Email Address</Form.Label><Form.Control className="form-control" defaultValue="dr.johnson@medsync.com"/></Col>
                <Col md={6}><Form.Label>Phone Number</Form.Label><Form.Control className="form-control" defaultValue="+1 (555) 123-4567"/></Col>
                <Col md={6}><Form.Label>Years of Experience</Form.Label><Form.Control className="form-control" defaultValue="12 Years"/></Col>
                <Col md={6}><Form.Label>Clinic Name</Form.Label><Form.Control className="form-control" defaultValue="Johnson Heart Clinic"/></Col>
                <Col md={12}><Form.Label>Clinic Location</Form.Label><Form.Control className="form-control" defaultValue="123 Medical Street, NYC"/></Col>
                <Col md={12}><Form.Label>Professional Bio</Form.Label><Form.Control as="textarea" rows={3} defaultValue="Experienced cardiologist specializing in heart disease treatment and prevention."/></Col>
                <Col md={12}><Button variant="primary" className="mt-2">Save Changes</Button></Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>

      <div className="card-like mt-4">
        <h5>Consultation Pricing</h5>
        <Row className="g-3 mt-2">
          <Col md={4}><Form.Label>Clinic Visit</Form.Label><Form.Control className="form-control" defaultValue="$150"/></Col>
          <Col md={4}><Form.Label>Online Consultation</Form.Label><Form.Control className="form-control" defaultValue="$100"/></Col>
          <Col md={4}><Form.Label>Home Visit</Form.Label><Form.Control className="form-control" defaultValue="$200"/></Col>
          <Col md={12}><Button variant="primary" className="mt-2">Update Pricing</Button></Col>
        </Row>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-md-4"><div className="small-card"><div className="text-muted-small">Rating</div><h2 className="fw-bold">4.8</h2><small className="text-muted-small">265 reviews</small></div></div>
        <div className="col-md-4"><div className="small-card"><div className="text-muted-small">Languages</div><p>English, Spanish, Arabic</p><Button variant="light" className="border btn-sm">Edit</Button></div></div>
        <div className="col-md-4"><div className="small-card"><div className="text-muted-small">Certifications</div><p>MD, Board Certified</p><Button variant="light" className="border btn-sm">Manage</Button></div></div>
      </div>
    </div>
  )
}
