import React from "react";
import Card from "../Card/Card";

export default function ({}) {
  const jobs = [
    {
      id: 1,
      job_type: "Design Engineer",
      image:
        "https://www.google.co.ke/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
      company: "Google",
      location: "Nairobi",
      url: "https://www.google.com/about/careers/applications-a/apply/f0528f5f-1071-4574-9320-141d3c5e349b/form",
      salary: "5,100",
      reviews:[
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        }
      ]
    },
    {
      id: 2,
      job_type: "Backend Engineer",
      image:
        "https://i.roamcdn.net/kazi/ke/hq/910055825a6b1fcd5d5fa8ca61bc6824/-/advertiser-img-ke-jobs-prod/dealer-images/advid15044/adv15044_1613054515.jpg",
      company: "Eclectics International Ltd",
      location: "Nairobi",
      url: "https://www.google.com/about/careers/applications-a/apply/f0528f5f-1071-4574-9320-141d3c5e349b/form",
      salary: "2,800",
      reviews:[
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        }
      ]
    },
    {
      id: 3,
      job_type: "Junior java developer",
      image:
        "https://i.roamcdn.net/kazi/ke/hq/0fe19d4a945bd62c51fd605065cd3a64/-/advertiser-img-ke-jobs-prod/dealer-images/advid7366/adv7366_1509458147.jpg",
      company: "MSpace Solutions Ltd",
      location: "Nairobi",
      url: "https://www.google.com/about/careers/applications-a/apply/f0528f5f-1071-4574-9320-141d3c5e349b/form",
      salary: "3,300",
      reviews:[
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        }
      ]
    },
    {
      id: 4,
      job_type: "Senior .NET Developer",
      image:
        "https://i.roamcdn.net/kazi/ke/hq/5399baaf49abff1b9724ab2bc97ff6b3/-/advertiser-img-ke-jobs-prod/dealer-images/advid17327/adv17327_1502683950.jpg",
      company: "Wise & Agile Solutions Ltd",
      location: "Remote",
      salary: "3,500",
      reviews:[
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        },
        {
          user_id:5,
          review:"great"
        }
      ]
    },
    
    
  ];
  const job = jobs.map((job) => {
    return (
      <Card
        key={job.id}
        id={job.id}
        jobname={job.job_type}
        logo={job.image}
        company={job.company}
        location={job.location}
        salary={job.salary}
        url={job.url}
      />
    );
  });

  return (
    <div className="text-dark">
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h4 className="text-black">Available Jobs :</h4>
        </div>
        <div className="row mt-4 g-1">{job}</div>
      </div>
    </div>
  );
}
