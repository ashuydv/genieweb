import React from 'react';
import Course from "../components/Course";
import Stats from "../components/Stats";
import DownCurriculum from "../components/DownCurriculum";
import Curriculum from "../components/Curriculum";
import Certificate from "../components/Certificate";
import Experts from "../components/Experts";
import Accelerate from "../components/Accelerate";
import Community from "../components/Community";
import FAQs from "../components/FAQs";
import Refer from "../components/Refer";
import Reviews from "../components/Reviews";
import Apply from "../components/Apply";
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const id = useParams()

  console.log(id);

  return (<div>
      <Course />
      <Stats />
      <DownCurriculum/>
      <Curriculum />
      <Certificate />
      <Experts/>
      <Accelerate/>
      <Community/>
      <Reviews/>
      <Refer/>
      <FAQs/>
      <Apply/>
  </div>);
};

export default CourseDetails;