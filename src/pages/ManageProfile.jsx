import React from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import MaleAvatar from '../assets/male_avatar.jpg'

function ManageProfile(){
  return (
    <div>
      <h2 className="fw-bold">Manage Profile</h2>
      <p className="text-muted-small">Update your professional information and settings</p>

      <div className="card-like mt-3">
        <h5>Profile Information</h5>
        <Row className="g-3 mt-2">
          <Col md={3} className="text-center">
            <div className="profile-photo mb-2">
              <img src={MaleAvatar} alt="" />
            </div>
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
        <div className="col-md-4"><div className="small-card"><div className="text-muted-small">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-4 h-4" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> 
          Rating
        </div><h2 className="fw-bold">4.8</h2><small className="text-muted-small">265 reviews</small></div></div>
        <div className="col-md-4"><div className="small-card"><div className="text-muted-small">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-4 h-4" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> 
          Languages
        </div><p>English, Spanish, Arabic</p><Button variant="light" className="border btn-sm">Edit</Button></div></div>
        <div className="col-md-4"><div className="small-card"><div className="text-muted-small">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-4 h-4" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> 
          Certifications
        </div><p>MD, Board Certified</p><Button variant="light" className="border btn-sm">Manage</Button></div></div>
      </div>
    </div>
  )
}

export default ManageProfile;