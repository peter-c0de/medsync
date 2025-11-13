import React from 'react'
import { Button } from 'react-bootstrap'

export default function Topbar(){
  return (
    <div className="topbar d-flex justify-content-between align-items-center px-4 py-3">
      <div></div>
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-light rounded-circle p-2 border"><i className="bi bi-bell"></i></button>
        <div className="avatar-circle">A</div>
      </div>
    </div>
  )
}
