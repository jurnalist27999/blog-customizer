import { createRoot } from 'react-dom/client'; /*используется для создания корневого элемента React-приложения*/
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx'; /*библиотека для удобного управления классами в CSS. Она позволяет объединять несколько классов в один.*/

import { Article } from './components/article/Article'; /*компонент - статья*/
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm'; /*компонент формы*/
import { defaultArticleState } from './constants/articleProps'; /*набор параметров, которые определяют
											начальные настройки для статьи (например, размер шрифта, цвет фона и т.д.).*/

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById(
	'root'
) as HTMLDivElement; /* узел DOM, который будет использоваться в качестве корневого элемента приложения.*/
const root = createRoot(domNode);

const App = () => {
	const [formState, setFormState] = useState(defaultArticleState);
	const [articlState, setArticlaState] = useState(defaultArticleState);

	const onSubmit = () => {
		setArticlaState(formState);
	};

	const onReset = () => {
		setArticlaState(defaultArticleState);
		setFormState(defaultArticleState);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articlState.fontFamilyOption.value,
					'--font-size': articlState.fontSizeOption.value,
					'--font-color': articlState.fontColor.value,
					'--container-width': articlState.contentWidth.value,
					'--bg-color': articlState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				state={formState}
				setState={setFormState}
				onSubmit={onSubmit}
				onReset={onReset}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
