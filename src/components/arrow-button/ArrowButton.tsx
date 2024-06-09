import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
//import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы. Нажатия на кнопку */
/*type OnClick = () => void;*/

export type TArrowButtonProps = {
	/*мой код*/ onClick: () => void;
	isOpen: boolean;
};

export const ArrowButton = ({ onClick, isOpen }: TArrowButtonProps) => {
	const classTogleButton =
		isOpen === true
			? styles.container_open
			: ''; /*пустые кавычки указываем, чтобы никакой класс не присвоился компоненту*/
	const classTogleArrow = isOpen === true ? styles.arrow_open : '';
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button' /*role - указывает на то, каким будет элемент в интерфейсе*/
			aria-label='Открыть/Закрыть форму параметров статьи' /*определяет текст, который будет использоваться для доступа к элементу.
																Например, с помощью программы чтения с экрана*/
			tabIndex={
				0
			} /*атрибут определяет порядок перехода к элементу при помощи клавиатуры*/
			className={`${styles.container} ${classTogleButton}`}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${classTogleArrow}`}
			/>
		</div>
	);
};
