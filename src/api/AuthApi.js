const userHost = 'https://wedev-api.sky.pro/api/user'

//РЕГИСТРАЦИЯ
export const register = ({ name, login, password }) => {
    return fetch(userHost, {
        method: 'POST',
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Такой пользователь уже существует')
        }
        if (response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if (!response.ok) {
            throw new Error('Что то пошло не так')
        }
        return response.json()
    })
}

//АВТОРИЗАЦИЯ
export const loginAut = ({ login, password }) => {
    return fetch(userHost + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Неверный логин или пароль')
        }
        if (response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if (!response.ok) {
            throw new Error('Что то пошло не так')
        }
        return response.json()
    })
}
