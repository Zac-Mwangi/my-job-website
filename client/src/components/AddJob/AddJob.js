import React from "react";
import "./AddJob.css";

export default function AddJob() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">POST JOB</h3>
          <div className="form-group mt-3">
            <label>Company Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Google inc."
            />
          </div>
          <div className="form-group mt-3">
            <label>Company logo</label>
            <input
              type="url"
              className="form-control mt-1"
              placeholder="Company Logo"
            />
          </div>
          <div className="form-group mt-3">
            <label>Job Type</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Job Type"
            />
          </div>
          <div className="form-group mt-3">
            <label>Salary</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="20000"
            />
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="30"
            ></textarea>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
