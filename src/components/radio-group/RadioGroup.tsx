import { OptionType } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { Option } from './Option';

import styles from './RadioGroup.module.scss';

type RadioGroupProps = {
	name: string; //уникальное имя группы радиокнопок
	options: OptionType[] /*массив объектов, каждый из которых
							представляет собой отдельную опцию.
							Объект может содержать следующие поля: value
							(значение опции), title (заголовок опции).*/;
	selected: OptionType; //выбранная опция
	onChange?: (
		value: OptionType
	) => void /*функция обратного вызова, которая вызывается при изменении выбранной опции.*/;
	title: string; //заголовок группы радиокнопок
};
//компонент радиогруп
export const RadioGroup = (props: RadioGroupProps) => {
	const { name, options, selected, onChange, title } = props;

	const handleChange = (option: OptionType) => onChange?.(option);

	return (
		<div className={styles.container}>
			{title && (
				<>
					<Text weight={800} size={12} uppercase>
						{title}
					</Text>
				</>
			)}
			<div className={styles.group}>
				{options.map((option) => (
					<Option /*компонент - отдельная радиокнопка*/
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => handleChange(option)}
						option={option}
					/> /*При изменении выбранной опции вызывается функция
						handleChange, которая, в свою очередь,
						вызывает функцию onChange, переданную
						в качестве свойства.*/
				))}
			</div>
		</div>
	);
};
