import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useRef, useState } from 'react';
import { RadioGroup } from 'components/radio-group';
import { Text } from 'components/text';
import { Select } from 'components/select';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from 'components/separator';
import { useFormClose } from './hooks/useFormClose';

export type ArticleParamsFormProps = {
	state: ArticleStateType;
	setState: React.Dispatch<React.SetStateAction<typeof defaultArticleState>>;
	onSubmit: () => void;
	onReset: () => void;
};
export const ArticleParamsForm = ({
	state,
	setState,
	onSubmit,
	onReset,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] =
		useState(false); /*мой код: начальное состояние. Для удобства пока true */

	const classOpen = isOpen === true ? styles.container_open : '';

	const formRef = useRef<HTMLFormElement | null>(null);

	const handlerArrow = () => {
		/*мой код*/
		setIsOpen((prev) => !prev); /**/
	};

	useFormClose({ isOpen, onClose: handlerArrow, rootRef: formRef });

	const handleChange = (key: string, value: OptionType) => {
		setState((prev) => ({ ...prev, [key]: value }));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit();
	};

	const handleReset = (e: FormEvent) => {
		e.preventDefault();
		onReset();
	};

	return (
		<>
			<ArrowButton onClick={handlerArrow} isOpen={isOpen} />
			<aside className={`${styles.container} ${classOpen}`}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}
					ref={formRef}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={state.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder={'Выберите шрифт'}
						title={'шрифт'}
						onChange={(value) => handleChange('fontFamilyOption', value)}
					/>
					<RadioGroup
						name={'fontsize'}
						options={fontSizeOptions}
						selected={state.fontSizeOption}
						title={'размер шрифта'}
						onChange={(value) => handleChange('fontSizeOption', value)}
					/>
					<Select
						selected={state.fontColor}
						options={fontColors}
						placeholder={'Выберите цвет'}
						title={'цвет шрифта'}
						onChange={(value) => handleChange('fontColor', value)}
					/>
					<Separator />
					<Select
						selected={state.backgroundColor}
						options={backgroundColors}
						placeholder={'Выберите цвет'}
						title={'цвет фона'}
						onChange={(value) => handleChange('backgroundColor', value)}
					/>
					<Select
						selected={state.contentWidth}
						options={contentWidthArr}
						placeholder={'Выберите ширину'}
						title={'ширина контента'}
						onChange={(value) => handleChange('contentWidth', value)}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
