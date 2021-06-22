
const data = [
    {
      id: 1,
      name: 'Buy the groceries',
      description: 'Go to Perekrestok and buy some meat, milk, potatoes and cheese.',
      completed: false
    },
    {
      id: 2,
      name: 'Mop the floors',
      description: 'Mop floors in all rooms',
      completed: true
    },
    {
      id: 3,
      name: 'Clean the stove',
      description: 'Clean stove with cleansing gel',
      completed: true
    },
    {
      id: 4,
      name: 'Inspect the fridge',
      description: 'Look up the shelves and throw out stale products',
      completed: false
    },
    {
      id: 5,
      name: 'Vacuum the floors',
      description: 'Vacuum in all rooms',
      completed: false
    },
    {
      id: 6,
      name: 'Read the book',
      description: 'Read 100 pages of the book',
      completed: true
    }
  ];

const projects = [
  {
    id: 0,
    name: 'Home chores',
    tasks: [
      {
        id: 1,
        name: 'Buy the groceries',
        description: 'Go to Perekrestok and buy some meat, milk, potatoes and cheese.',
        completed: false
      },
      {
        id: 2,
        name: 'Mop the floors',
        description: 'Mop floors in all rooms',
        completed: true
      },
      {
        id: 3,
        name: 'Clean the stove',
        description: 'Clean stove with cleansing gel',
        completed: true
      },
      {
        id: 4,
        name: 'Inspect the fridge',
        description: 'Look up the shelves and throw out stale products',
        completed: false
      },
      {
        id: 5,
        name: 'Vacuum the floors',
        description: 'Vacuum in all rooms',
        completed: false
      }
    ]
  },
  {
    id: 1,
    name: 'Education',
    tasks: [
      {
        id: 7,
        name: 'Read the book',
        description: 'Read 100 pages of the book',
        completed: true
      },
      {
        id: 8,
        name: 'Do React homework',
        description: 'Code 6th homework',
        completed: false
      },
      {
        id: 9,
        name: 'Get ready for the test',
        description: 'Read textbook and write down all definitions',
        completed: false
      }
    ]
  },
  {
    id: 2,
    name: 'Beauty routine',
    tasks: [
      {
        id: 6,
        name: 'Get a manicure',
        description: 'Go to a salon and get a manicure',
        completed: false
      },
      {
        id: 10,
        name: 'Get eyebrows shaped',
        description: 'Go to a salon and get eyebrows shaped',
        completed: true
      }
    ]
  }
]





  export default projects;
/*
  Object.keys(this.state.projects).map(projectId => {
    const project = this.state.projects[projectId]
    ...
*/
   

  // export default projects;
  // export default normalizeState;