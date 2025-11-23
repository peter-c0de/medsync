import React from 'react'
import { Button, Form } from 'react-bootstrap'

function PatientCard({name, age, blood, allergy, meds}){
  return (
    <div className="card-like mb-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex gap-3">
          <div className="item-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div>
            <div className="item-title">{name}</div>
            <div className="text-muted-small">Last visit: 2 weeks ago • Total visits: 15</div>
          </div>
        </div>
        <div>
          <Button variant="primary" className="me-2">Open Record</Button>
          <Button variant="light" className="border">View Full History</Button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-3"><div className="text-muted-small">Age</div><div>{age} years</div></div>
        <div className="col-md-3"><div className="text-muted-small">Blood Type</div><div>{blood}</div></div>
        <div className="col-md-3"><div className="text-muted-small">Allergies</div><div style={{color:'#d64545'}}>{allergy}</div></div>
        <div className="col-md-3"><div className="text-muted-small">Height/Weight</div><div>5'10" / 180 lbs</div></div>
      </div>

      <div className="mt-3"><div className="text-muted-small">Current Medications</div>
        <div className="form-control" style={{borderRadius:8, background:'#f5f8fb'}}> {meds.join(', ')} </div>
      </div>

      <div className="mt-3"><div className="text-muted-small">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-4 h-4 text-purple-500" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> 
        Recent Documents
        </div>
        <div className="card-like mt-2" style={{background:'#f8f1ff'}}><div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-4 h-4 text-purple-500" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> 
          Lab Results - Dec 10, 2024 <Button variant="link">View</Button></div></div>
        <div className="card-like mt-2" style={{background:'#f8f1ff'}}><div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-4 h-4 text-purple-500" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> 
          Previous Consultation - Dec 3, 2024 <Button variant="link">View</Button></div></div>
      </div>
    </div>
  )
}

function PatientHistory(){
  return (
    <div>
      <h2 className="fw-bold">Patient History</h2>
      <p className="text-muted-small">View patient medical records and history before consultation</p>

      <div className="card-like mt-3"><Form.Control placeholder="Search patient by name or ID..." className="form-control" /></div>

      <div className="mt-3">
        <PatientCard name="Sarah Anderson" age={32} blood={'O+'} allergy={'Penicillin'} meds={[ 'Lisinopril', 'Metformin' ]} />
        <PatientCard name="John Smith" age={45} blood={'A+'} allergy={'None'} meds={[ 'Albuterol', 'Fluticasone' ]} />
        <PatientCard name="Emma Davis" age={28} blood={'B+'} allergy={'Sulfa drugs'} meds={[ 'Birth control' ]} />
        <PatientCard name="Michael Brown" age={56} blood={'AB+'} allergy={'Aspirin'} meds={[ 'Atorvastatin', 'Metoprolol', 'Lisinopril' ]} />
      </div>
    </div>
  )
}

export default PatientHistory;