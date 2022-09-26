import React from 'react'
import { demoProjects } from '../../utils/data'
import ProjectListHeader from './ProjectListHeader'
import ProjectListItem from './ProjectListItem'

const ProjectList = () => {
  const [backlog, setBacklog] = React.useState(
    demoProjects.filter((p) => p.status === 'backlog')
  )

  const [ready, setReady] = React.useState(
    demoProjects.filter((p) => p.status === 'ready')
  )

  const [doing, setDoing] = React.useState(
    demoProjects.filter((p) => p.status === 'doing')
  )

  const [review, setReview] = React.useState(
    demoProjects.filter((p) => p.status === 'review')
  )

  //DND Functionalities:

  return (
    <div class='flex flex-grow px-10 mt-4 space-x-6 overflow-auto'>
      {/* Backlog */}
      <div class='flex flex-col flex-shrink-0 w-72'>
        <ProjectListHeader title='Backlog' count={backlog?.length} editable />

        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300  '>
          {backlog.map((project) => (
            <ProjectListItem key={project.id} project={project} editable />
          ))}
        </div>
      </div>

      {/* Ready */}
      <div class='flex flex-col flex-shrink-0 w-72'>
        <ProjectListHeader title='Ready' count={ready?.length} />

        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300  '>
          {ready.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Doing */}
      <div class='flex flex-col flex-shrink-0 w-72'>
        <ProjectListHeader title='Doing' count={doing?.length} />

        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300  '>
          {doing.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Review */}
      <div class='flex flex-col flex-shrink-0 w-72'>
        <ProjectListHeader title='Review' count={review?.length} />

        <div class='flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300  '>
          {review.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList
