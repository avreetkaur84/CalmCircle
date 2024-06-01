import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'

export const projects = [
    {
      "title": "Anonymous Messaging",
      "description": "Communicate with others anonymously to share thoughts, feelings, and experiences without the fear of judgment or stigma.",
      "link": "/anonymous-messaging"
    },
    {
      "title": "User Posts and Feeds",
      "description": "Create, publish, and view posts to stay connected with the community. Explore feeds to discover content from others and engage in meaningful discussions.",
      "link": "/user-posts-and-feeds"
    },
    {
      "title": "Private Messaging",
      "description": "Engage in private conversations with other users for more personal interaction. Share thoughts, provide support, and connect on a deeper level.",
      "link": "/private-messaging"
    },
    {
      "title": "Curated Resources",
      "description": "Access a comprehensive collection of curated resources including articles, videos, podcasts, and tools to support mental health and well-being.",
      "link": "/curated-resources"
    },
    {
      "title": "Journaling",
      "description": "Keep a digital journal to record thoughts, emotions, and experiences. Reflect on personal growth, track progress, and gain insights into mental health patterns.",
      "link": "/journaling"
    },
    {
      "title": "Guided Activities",
      "description": "Participate in guided activities and exercises designed to promote mental wellness. Explore mindfulness practices, relaxation techniques, and stress-reducing activities.",
      "link": "/guided-activities"
    }
  ];

function Features() {
  return (
    <div className='pb-12 pt-28'>
      <h1 className='text-4xl font-bold font-serif text-center pb-8'>Main Features</h1>
      <div className="mx-10">
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}

export default Features
