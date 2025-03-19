import {Column} from '../Column/Column.jsx';

export const Main = () => {
  const tasks = [
    {
      ColumnName: "Без статуса",
      Lesson: "Web design",
      ThemeColor: "_orange",
      Title: "Новая задача",
    },
    {
      ColumnName: "Без статуса",
      Lesson: "Research",
      ThemeColor: "_green",
      Title: "Новая задача",
    },
    {
      ColumnName: "Без статуса",
      Lesson: "Web design",
      ThemeColor: "_orange",
      Title: "Новая задача",
    },
    {
      ColumnName: "Без статуса",
      Lesson: "Copywriting",
      ThemeColor: "_purple",
      Title: "Новая задача",
    },
    {
      ColumnName: "Без статуса",
      Lesson: "Web design",
      ThemeColor: "_orange",
      Title: "Новая задача",
    },
    {
      ColumnName: "Нужно сделать",
      Lesson: "Research",
      ThemeColor: "_green",
      Title: "Новая задача",
    },
    {
      ColumnName: "В работе",
      Lesson: "Copywriting",
      ThemeColor: "_purple",
      Title: "Новая задача",
    },
    {
      ColumnName: "В работе",
      Lesson: "Copywriting",
      ThemeColor: "_purple",
      Title: "Новая задача",
    },
    {
      ColumnName: "В работе",
      Lesson: "Web design",
      ThemeColor: "_orange",
      Title: "Новая задача",
    },
    {
      ColumnName: "Тестирование",
      Lesson: "Research",
      ThemeColor: "_green",
      Title: "Новая задача",
    },
    {
      ColumnName: "Готово",
      Lesson: "Research",
      ThemeColor: "_green",
      Title: "Новая задача",
    },
  ]

    return (
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                <Column ColumnName={"Без статуса"}
                  cards = {
                    tasks.filter((task) => task.ColumnName === "Без статуса")
                  }
                />
                <Column ColumnName={"Нужно сделать"}
                  cards = {
                    tasks.filter((task) => task.ColumnName === "Нужно сделать")
                  }
                />
                <Column ColumnName={"В работе"}
                  cards = {
                    tasks.filter((task) => task.ColumnName === "В работе")
                  }
                />
                <Column ColumnName={"Тестирование"}
                  cards = {
                    tasks.filter((task) => task.ColumnName === "Тестирование")
                  }
                />
                <Column ColumnName={"Готово"}
                  cards = {
                    tasks.filter((task) => task.ColumnName === "Готово")
                  }
                />
              </div>
            </div>
          </div>
        </main>
    )
}
