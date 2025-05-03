import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
text-align: center;
`;

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Футер</div>;

export const Blog = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<din>Главная страница</din>} />
					<Route path="/ogin" element={<din>Авторизация</din>} />
					<Route path="/register" element={<din>Регистрация</din>} />
					<Route path="/users" element={<din>Пользователи</din>} />
					<Route path="/post/" element={<din>Новая статья</din>} />
					<Route path="/post/:postId" element={<din>Статья</din>} />
					<Route path="*" element={<din>Ошибка</din>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
};
