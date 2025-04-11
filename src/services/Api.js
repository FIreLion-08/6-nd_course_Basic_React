const basaHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

//Получить список задач.
export const getCards = (token) => {
  return fetch(basaHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }).then((response)=>{
    if (!response.status === 401) {
      throw new Error("Ошибка авторизации");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!response.ok) {
      throw new Error("Что то пошло не так");
    }
    return response.json();
  });
}

//Добавить задачу в список.
export async function postTodo({token, text}) {
  const response = await fetch(basaHost, {
    headers: {
      Authorization:  `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({text})
  });
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

//РЕГИСТРАЦИЯ
export const register = ({ name, login, password }) => {

  if (name.length < 2 || login.length < 2 || password.length < 2) {
    throw new Error("Имя, логин и пароль должны быть длиной минимум 2 символа.");
  }

  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      // Разбор текста ошибки для более точного сообщения
      return response.json().then(data => {
        if (data.error === "User already exists") {
          throw new Error("Такой пользователь уже существует.");
        } else {
          throw new Error("Некорректные данные ввода.");
        }
      });
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!response.ok) {
      throw new Error("Что то пошло не так");
    }
    return response.json();
  });
}

//АВТОРИЗАЦИЯ
export const loginAut = ({ login, password }) => {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!response.ok) {
      throw new Error("Что то пошло не так");
    }
    return response.json();
  });
}
