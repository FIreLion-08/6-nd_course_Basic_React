import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import {routesPath } from './lib/routesPath.js';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
import { MainPage } from './pages/MainPage/MainPage.jsx';
// import { PopBrowse } from './components/PopUps/PopBrowse/PopBrowse.jsx';
import { ExitPage } from './pages/ExitPage/ExitPage.jsx';
import { NotFound } from './pages/NotFoundPage/NotFound.jsx';
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';
import { RegistrPage } from './pages/RegistrPage/RegistrPage.jsx';
import { PopBrowsePage } from './pages/PopBrowsePage/PopBrowsePage.jsx';

function getLocalStorage() {
  let user = ''
  try {
    user = JSON.parse(localStorage.getItem())//Берем знаяения из LolacStorage tckb
    return user //если есть выводит Uter
  }

  catch (err) {
    return '' //если нет выводит пустую строку

  }

}

export const AppRoutes = ({setTheme, theme}) => {

  const [isAuth, setIsAuth] = useState(getLocalStorage()); // Берёт значения из localStorage либо пустая строка

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path={routesPath.MAIN} element={<MainPage isAuth={isAuth} setTheme={setTheme} theme={theme} />}>
          <Route path={routesPath.CARD_ID} element={<PopBrowsePage />} />
          <Route path={routesPath.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>

      <Route path={routesPath.LOGIN} element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route path={routesPath.REGISTER} element={<RegistrPage />} />
      <Route path={routesPath.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
};
