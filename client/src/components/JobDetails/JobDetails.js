import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import "./JobDetails.css";
import { Textarea } from "evergreen-ui";

function JobDetails() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("info");
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("/jobs/" + params.id)
      .then((r) => r.json())
      .then((data) => {
        setDetails(data);
        setReviews(data.reviews);
      });
  }, [params.id]);

  return (
    <DetailWrapper style={{ margin: "10% 20%" }}>
      <div>
        {/* <h2>{details.company}</h2> */}
        <img style={{ width: "20vh" }} src={details.company_logo} />
      </div>
      <Info style={{ padding: "0% 20%" }}>
        <Button
          className={activeTab === "info" ? "active" : ""}
          onClick={() => setActiveTab("info")}
        >
          Info
        </Button>
        <Button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </Button>
        {activeTab === "info" && (
          <div>
            <br></br>
            <h3>{details.job_type}</h3>
            <h3>{details.location}</h3>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            {reviews.length > 0 && (
              <ul style={{ color: "#313131" }}>
                {reviews.map((review_obj) => (
                  <li
                    style={{
                      color: "#313131",
                      border: "2px solid black",
                      padding: "2px",
                      margin: "2px",
                    }}
                    key={review_obj.id}
                    onClick={() => alert(review_obj.id)}
                  >
                    {review_obj.review}
                  </li>
                ))}
              </ul>
            )}
            <div
              style={{
                display: "block",
                width: 700,
                paddingLeft: 30,
              }}
            >
              <br></br> 
              <br></br>
              <h4>ADD COMMENT</h4>
              <Textarea
                // onChange={(e) => setSummary(e.target.value)}
                placeholder="Enter your summary of poem"
              />{" "}
              <br></br>
              <br></br>
              <button>Save</button>
            </div>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default JobDetails;
