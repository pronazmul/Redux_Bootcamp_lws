import React from 'react'
import { demoProjects } from '../../utils/data'
import ProjectListHeader from './ProjectListHeader'
import ProjectListItem from './ProjectListItem'
import { useDrop } from 'react-dnd'

const ProjectList = () => {
  const [backlog, setBacklog] = React.useState(
    demoProjects.filter((p) => p.status === 'backlog')
  )
  const [ready, setReady] = React.useState(
    demoProjects.filter((p) => p.status === 'ready')
  )

  //DND Functionalities:
  const [{ isOver }, addToReadyRef] = useDrop({
    accept: 'backlog',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  const [{ isOver: isBacklogOver }, removeFromReadyRef] = useDrop({
    accept: 'ready',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  const moveProject = (item) => {
    if (item?.type === 'backlog') {
      //Accepting the backlog into Ready
      let project = backlog.find((p) => p.id === item.id)
      project.status = 'ready'
      setReady((_ready) => [..._ready, project])
      setBacklog((_backlog) => _backlog.filter((b) => b.id !== item.id))
    } else {
      //Accepting Ready to Backlog
      let project = ready.find((p) => p.id === item.id)
      project.status = 'backlog'
      setBacklog((_backlog) => [..._backlog, project])
      setReady((_ready) => _ready.filter((r) => r.id !== item.id))
    }
  }

  const readyBg = isOver ? 'bg-red-200' : 'bg-light'
  const backLockBg = isBacklogOver ? 'bg-red-200' : 'bg-light'

  return (
    <div className='flex flex-grow px-10 mt-4 space-x-6 overflow-auto'>
      {/* Backlog */}
      <div className='flex flex-col flex-shrink-0 w-72'>
        <ProjectListHeader title='Backlog' count={backlog?.length} editable />

        <div
          className={`flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300 h-full rounded-lg ${backLockBg}`}
          ref={removeFromReadyRef}
        >
          {backlog.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
              projectType='backlog'
              onDropProject={moveProject}
              editable
            />
          ))}
        </div>
      </div>

      {/* Ready */}
      <div className='flex flex-col flex-shrink-0 w-72'>
        <ProjectListHeader title='Ready' count={ready?.length} />

        <div
          className={`flex flex-col pb-2 overflow-auto  scrollbar-thin  scrollbar-thumb-indigo-300 h-full rounded-lg ${readyBg}`}
          ref={addToReadyRef}
        >
          {ready.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
              projectType='ready'
              onDropProject={moveProject}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList
