

  const normalizeState = (projectArray) => { // projectArray - массив проектов из первого код сниппета
    const normalizedProjects = {}
    const normalizedTasks = {}

    const normalizedState = {
        projectsById : normalizedProjects,
        tasksById : normalizedTasks
    }

    const getTaskId = (tasks) => {
        const tasksIds = []
        tasks.map(task => tasksIds.push(task.id))
            return tasksIds;
    }

    projectArray.map(proj => {
        const projTasks = proj.tasks;
        projTasks.map(it => {
           return normalizedTasks[it.id] = { 
            id: it.id,
            name: it.name,
            description: it.description,
            completed: it.completed
            }
        })
        return normalizedProjects[proj.id] = {
            id: proj.id,
            name: proj.name,
            tasksIds: getTaskId(proj.tasks)
        }
    })
    return normalizedState; // normalizedState - нормализованный стейт из второго код сниппета

    
  }

  export default normalizeState;