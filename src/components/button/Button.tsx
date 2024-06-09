import { Text } from 'components/text';

import styles from './Button.module.scss';

export const Button = ({
	/*три аргумента: title, onClick и type*/ title,
	onClick,
	type,
}: {
	title: string;
	onClick?: () => void /*необязательный обработчик по клику*/;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	/*необязательный тип кнопки. выбирается из перечисления */
}) => {
	return (
		/*В функции возврата создаётся кнопка с текстом title и функцией onClick.*/
		<button className={styles.button} type={type} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
