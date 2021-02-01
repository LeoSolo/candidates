export const tasks = [
  {
    name: 'Выдвижение и регистрация',
    start: new Date().getTime(),
    end: new Date().getTime() + (86400000 * 3),
    type: 'ORG',
    subTasks: [
      {
        name: 'Танцы',
        done: true,
        start: new Date().getTime(),
        end: new Date().getTime() + 86400000
      },
      {
        name: 'Песни',
        done: true,
        start: new Date().getTime() + 86400000,
        end: new Date().getTime() + (86400000 * 2)
      },
      {
        name: 'Драки',
        done: false,
        start: new Date().getTime() + (86400000 * 2),
        end: new Date().getTime() + (86400000 * 3)
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
        done: true,
        start: new Date().getTime() + (86400000 * 4),
        end: new Date().getTime() + (86400000 * 5)
      },
      {
        name: 'Песни',
        done: true,
        start: new Date().getTime() + (86400000 * 5),
        end: new Date().getTime() + (86400000 * 7)
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
        done: true,
        start: new Date().getTime() + (86400000 * 4),
        end: new Date().getTime() + (86400000 * 5)
      },
      {
        name: 'Танцы',
        done: true,
        start: new Date().getTime() + (86400000 * 5),
        end: new Date().getTime() + (86400000 * 6)
      },
      {
        name: 'Танцы',
        done: false,
        start: new Date().getTime() + (86400000 * 6),
        end: new Date().getTime() + (86400000 * 7)
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
        done: true,
        start: new Date().getTime(),
        end: new Date().getTime() + (86400000 * 2)
      },
      {
        name: 'Танцы',
        done: false,
        start: new Date().getTime() + (86400000 * 2),
        end: new Date().getTime() + (86400000 * 3)
      },
      {
        name: 'Танцы',
        done: false,
        start: new Date().getTime() + (86400000 * 2),
        end: new Date().getTime() + (86400000 * 3)
      }
    ]
  },
  {
    name: 'Пикеты',
    start: new Date().getTime() + (86400000 * 8),
    end: new Date().getTime() + (86400000 * 12),
    type: 'SOC',
    subTasks: [
      {
        name: 'Танцы',
        done: true,
        start: new Date().getTime() + (86400000 * 8),
        end: new Date().getTime() + (86400000 * 9)
      },
      {
        name: 'Танцы',
        done: true,
        start: new Date().getTime() + (86400000 * 9),
        end: new Date().getTime() + (86400000 * 11)
      }
    ]
  }
]
