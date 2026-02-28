import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import { Experience } from "../types/resume";

interface TimelineProps {
  data: Experience[];
}

function Timeline({ data }: TimelineProps) {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {data.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={item.id === data[0].id ? { background: 'white', color: 'rgb(39, 40, 34)' } : undefined}
              contentArrowStyle={item.id === data[0].id ? { borderRight: '7px solid  white' } : undefined}
              date={item.period}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{item.role}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.company} | {item.location} {item.type ? `(${item.type})` : ""}</h4>
              <p>
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;