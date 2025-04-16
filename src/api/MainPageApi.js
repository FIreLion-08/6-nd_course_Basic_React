const basaHost = 'https://wedev-api.sky.pro/api/kanban'
const userHost = 'https://wedev-api.sky.pro/api/user'

//Получить список задач.
export const getCards = (token) => {
    return fetch(basaHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status === 401) {
            throw new Error('Ошибка авторизации')
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

//Добавить задачу в список.
export async function addNewCardApi({ token, newCard }) {
    return fetch(basaHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify(newCard),
    }).then((response) => {
        if (response.status === 401) {
            throw new Error('Ошибка авторизации')
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

// Изменить задачу
export async function putTodo({ token, id, taskData }) {
    const response = await fetch(basaHost + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'PUT',
        body: JSON.stringify(taskData),
    })

    if (!response.status === 201) {
        throw new Error('Ошибка')
    }

    const data = await response.json()
    return data
}

// Удалить задачу
export async function deleteTodo({ taskData, id, token }) {
    const response = await fetch(basaHost + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
        body: JSON.stringify({
            taskData,
        }),
    })

    if (!response.status === 201) {
        throw new Error('Ошибка')
    }

    const data = await response.json()
    return data
}

export async function getUsersList({ token }) {
    const response = await fetch(userHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    if (!response.status === 201) {
        throw new Error('Ошибка')
    }

    const data = await response.json()
    return data
}
