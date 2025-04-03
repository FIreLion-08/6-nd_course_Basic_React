import { Link } from "react-router-dom";
import { Wrapper } from "../../lib/global.styled";
import { routesPath } from "../../lib/routesPath";

export const NotFound = () => {
    return (
        <Wrapper>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <button>
                <Link to={routesPath.MAIN}>Перейти на главную страницу</Link>
            </button>
        </Wrapper>

    );
}
