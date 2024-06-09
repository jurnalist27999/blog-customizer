import { useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'components/text';
import { useEnterSubmit } from './hooks/useEnterSubmit';

import styles from './RadioGroup.module.scss';

type OptionProps = {
	/*тип для пропса компонента Option.Здесь определили свойства, который компонент принимает*/
	value: OptionType['value'] /*свойство содержит значение, которое будет использоваться в элементе <input> с типом radio.*/;
	title: OptionType['title'] /*название выбранного элемента - заголовок*/;
	selected: OptionType /*представляет выбранный элемент*/;
	groupName: string /*название группы радиокнопок, к которой относится выбранный элемент.*/;
	onChange?: (
		option: OptionType
	) => void /*необязательная функция, которая вызывается при изменении выбранного элемента. */;
	option: OptionType /*Содержит выбранный элемент. Это может быть использовано для отображения информации о выбранном элементе в интерфейсе приложения.*/;
};

export const Option = (props: OptionProps) => {
	const { value, title, selected, groupName, onChange, option } = props;

	const optionRef = useRef<HTMLDivElement>(null);

	const handleChange = () => onChange?.(option);

	useEnterSubmit({ onChange, option });

	const inputId = `${groupName}_radio_item_with_value__${value}`;
	const isChecked = value === selected.title;

	return (
		<div
			className={styles.item}
			key={value}
			data-checked={isChecked}
			data-testid={inputId}
			tabIndex={0}
			ref={optionRef}>
			<input
				className={styles.input}
				type='radio'
				name={groupName}
				id={inputId}
				value={value}
				onChange={handleChange}
				tabIndex={-1}
			/>
			<label className={styles.label} htmlFor={inputId}>
				<Text size={18} uppercase>
					{title}
				</Text>
			</label>
		</div>
	);
};
