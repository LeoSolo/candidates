export const tasks = [
  {
    name: 'Выдвижение и регистрация',
    start: new Date().getTime(),
    end: new Date().getTime() + (86400000 * 3),
    type: 'ORG',
    subTasks: [
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: false
      }
    ]
  },
  {
    name: 'Организационные процедуры',
    start: new Date().getTime() + (86400000 * 4),
    end: new Date().getTime() + (86400000 * 7),
    type: 'ORG',
    subTasks: [
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      }
    ]
  },
  {
    name: 'Рекрутинг агитаторов',
    start: new Date().getTime() + (86400000 * 4),
    end: new Date().getTime() + (86400000 * 7),
    type: 'MOB',
    subTasks: [
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: false
      }
    ]
  },
  {
    name: 'Пикеты',
    start: new Date().getTime() + 86400000,
    end: new Date().getTime() + (86400000 * 2),
    type: 'SOC',
    subTasks: [
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: false
      }
    ]
  },
  {
    name: 'Идет голосование',
    start: new Date().getTime(),
    end: new Date().getTime() + (86400000 * 3),
    type: 'SOC',
    subTasks: [
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: true
      },
      {
        name: 'Танцы',
        done: false
      }
    ]
  }
]
