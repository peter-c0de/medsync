import React from "react";
import "../styles/subscription.css";
import { Button } from "react-bootstrap";

function Subscription() {
  return (
    <div>
      <h2 className="subscription-title">Subscription & Billing</h2>
      <p className="subscription-sub">
        Manage your subscription plan and payment methods
      </p>

      {/* CURRENT PLAN */}
      <div className="current-plan-box">
        <h5 className="fw-bold">Premium Plan</h5>

        <div className="current-plan-grid mt-3">
          <div className="plan-info">
            <h3>
              $99 <small className="text-muted">/month</small>
            </h3>

            <div className="plan-features">
              <ul>
                <li>Unlimited patient consultations</li>
                <li>Home visit scheduling</li>
                <li>Advanced analytics</li>
                <li>Custom branding</li>
                <li>Online consultation feature</li>
                <li>Patient history management</li>
                <li>Priority support</li>
                <li>Integration with external services</li>
              </ul>
            </div>
          </div>

          <div className="text-end d-flex flex-column justify-content-between">
            <span className="plan-status">active</span>

            <div className="mt-3">
              <Button variant="outline-primary" className="me-2">
                Upgrade Plan
              </Button>
              <Button variant="outline-danger">Cancel Subscription</Button>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER PLANS */}
      <h5 className="fw-bold mt-4">Other Plans</h5>

      <div className="other-plans">
        <div className="plan-card">
          <h5>Basic</h5>
          <h3>$49 /month</h3>
          <ul>
            <li>Up to 100 consultations/month</li>
            <li>Online consultation feature</li>
            <li>Patient history management</li>
            <li>Basic analytics</li>
            <li>Email support</li>
          </ul>
          <Button variant="primary" className="mt-2">
            Switch to Basic
          </Button>
        </div>

        <div className="plan-card current">
          <h5>Premium</h5>
          <h3>$99 /month</h3>
          <ul>
            <li>Unlimited patient consultations</li>
            <li>Online consultation feature</li>
            <li>Home visit scheduling</li>
            <li>Patient history management</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
            <li>Custom branding</li>
          </ul>
          <Button variant="primary" className="mt-2">
            Current
          </Button>
        </div>

        <div className="plan-card">
          <h5>Enterprise</h5>
          <h3>$199 /month</h3>
          <ul>
            <li>Unlimited everything</li>
            <li>Advanced online consultation</li>
            <li>Home visit management</li>
            <li>Staff accounts management</li>
            <li>Full analytics & reports</li>
            <li>24/7 dedicated support</li>
          </ul>
          <Button variant="primary" className="mt-2">
            Switch to Enterprise
          </Button>
        </div>
      </div>

      {/* PAYMENT METHOD */}
      <div className="card-block mt-4">
        <h5 className="fw-bold">Payment Method</h5>

        <div className="payment-item">
          <div>
            <b>Visa ending in 4242</b>
            <div className="text-muted-small">Expires 12/26</div>
          </div>
          <div>
            <Button variant="light" className="me-2">
              Edit
            </Button>
            <Button variant="outline-danger">Remove</Button>
          </div>
        </div>
      </div>

      {/* BILLING HISTORY */}
      <div className="card-block mt-4">
        <h5 className="fw-bold">Billing History</h5>

        <div className="history-item">
          <div>Dec 1, 2024 — Premium Plan - INV-202412-001</div>
          <div>
            <span className="status-paid">paid</span> <b>$99.00</b>
          </div>
        </div>

        <div className="history-item">
          <div>Nov 1, 2024 — Premium Plan - INV-202411-001</div>
          <div>
            <span className="status-paid">paid</span> <b>$99.00</b>
          </div>
        </div>
      </div>

      {/* NOTICE */}
      <div className="notice-box mt-3">
        <div className="d-flex align-items-start gap-3">
          <i className="bi bi-info-circle fs-4"></i>
          <div>
            <b>Subscription Renewal</b>
            <div className="text-muted-small">
              Your Premium plan will be renewed on January 1, 2025 for $99.00.
              If you wish to cancel or change your plan, please do so before the
              renewal date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;

