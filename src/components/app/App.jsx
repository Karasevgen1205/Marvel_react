import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Game from "../appGame/game/Game";
import AppMarvel from "../appMarvel/AppMarvel";
import AppEmployeesList from "../appEmployeesList/appEmployeesList/AppEmployeesList";
import "./app.scss";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="all-works">
					<Header />
					<div className="app">
						<Routes>
							<Route exact path="/tic-tac-toe" element={<Game />} />
							<Route exact path="/marvel" element={<AppMarvel />} />
							<Route
								exact
								path="/employees-list"
								element={<AppEmployeesList />}
							/>
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;

// 4. Существует страница на домене domain.one, на которой загружается iframe с
// другого домена - domain.two. Нужно на странице domain.one использовать скрипт для
// записи/чтения/удаления данных из localStorage домена domain.two. При этом оба
// домена под нашим управлением, то есть, мы можем изменять файлы и там, и там, как
// нам удобно.
// Задача: написать реализацию методов для чтения/записи/удаления данных из
// доступного localStorage другого домена. Пусть при успешном чтении данные
// выводятся в консоль, а при успешной записи/удалении в консоль отправляется лог
// вроде “written” или “removed”.
// 5. Для работы с кросс-доменным localStorage понадобилось не только
// чтение/запись/удаление данных из него, но и их дополнительная обработка.
// Задача: добавить в решение задачи 4 возможность передать callback и вызвать его на
// domain.one после выполнения операции чтения/записи/удаления
