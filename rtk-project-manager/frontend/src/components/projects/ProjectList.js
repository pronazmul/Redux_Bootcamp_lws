import React from 'react'
import { demoProjects } from '../../utils/data'
import ProjectListHeader from './ProjectListHeader'
import ProjectListItem from './ProjectListItem'
import { projectStatus } from '../../utils/config'
import DrugWrapper from './DrugWrapper'

const ProjectList = () => {
  const [projects, setProjects] = React.useState(demoProjects)

  const onDrop = (item, monitor, status) => {
    console.log(item)
    setProjects((prevProjects) => {
      const modified = prevProjects
        .filter((p) => p.id !== item.id)
        .concat({
          ...item,
          status,
        })
      return [...modified]
    })
  }

  return (
    <div className='flex flex-grow px-10 mt-4 space-x-6 overflow-auto'>
      {projectStatus.map((status) => (
        <div key={status} className='flex flex-col flex-shrink-0 w-72'>
          <ProjectListHeader title={status} projects={projects} editable />
          <DrugWrapper onDrop={onDrop} status={status}>
            {projects
              .filter((project) => project.status === status)
              .map((project) => (
                <ProjectListItem
                  key={project.id}
                  project={project}
                  status={status}
                  editable
                />
              ))}
          </DrugWrapper>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
