import React from 'react'
import { demoProjects } from '../../utils/data'
import ProjectListHeader from './ProjectListHeader'
import ProjectListItem from './ProjectListItem'
import { projectStatus } from '../../utils/config'
import DrugWrapper from './DrugWrapper'
import {
  useGetProjectsQuery,
  useUpdateProjectMutation,
} from '../../features/projects/projectsApi'
import Loader from '../ui/Loader'
import Error from '../ui/Error'
import toast from 'react-hot-toast'

const ProjectList = () => {
  const {
    data: projects = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProjectsQuery()

  const [updateProject, { isSuccess: updateSuccess, isError: updateError }] =
    useUpdateProjectMutation()

  const onDrop = (item, monitor, status) => {
    let updatedData = { ...item, status }
    updateProject({ id: updatedData?.id, data: updatedData })
  }

  React.useEffect(() => {
    if (updateSuccess) toast.success('Status Changed!')
    if (updateError) toast.error('Failed')
  }, [updateSuccess, updateError])

  return (
    <div className='flex flex-grow px-10 mt-4 space-x-6 overflow-auto'>
      {projectStatus.map((status) => (
        <div key={status} className='flex flex-col flex-shrink-0 w-72'>
          <ProjectListHeader
            title={status}
            projects={projects}
            editable={status === 'backlog'}
          />
          <DrugWrapper onDrop={onDrop} status={status}>
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <Error message={error?.message} />
            ) : (
              isSuccess &&
              projects
                .filter((project) => project?.status === status)
                .map((project) => (
                  <ProjectListItem
                    key={project.id}
                    project={project}
                    status={status}
                    editable={status === 'backlog'}
                  />
                ))
            )}
          </DrugWrapper>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
