import {
	FontFamiliesClasses,
	fontFamilyClasses,
} from 'src/constants/articleProps';

/** Так выглядят typeGuards в ts, он позволяет нам определить является ли переменная определенным типом.
 * Подробнее о них можно почитать тут - https://www.typescriptlang.org/docs/handbook/advanced-types.html */
/*Type Guard - механизм, который позволяет проверять тип значения выраженияво время компиляции.
 Это позволяет добавлять дополнительную логику в зависимости от типа данных, что может улучшить читаемость и безопасность кода
 С помощью механизма можно создавать более специфические ф-ции и методы, которые будут вызываться только для определенных типов данных.
 Это может быть полезно для проверки ввода пользователя или обработки данных из API*/
export function isFontFamilyClass(
	family?: string | FontFamiliesClasses
): family is FontFamiliesClasses {
	return fontFamilyClasses.includes(family as FontFamiliesClasses);
} /*функция isFontFamilyClass проверяет, является ли переданный класс семейства шрифтов
	 одним из заранее определенных классов. Если это так, функция возвращает true, иначе - false.*/
