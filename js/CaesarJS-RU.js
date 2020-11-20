function S(){

	//Объявление переменных
	var i, alphabet, alphabet_RU, alphabet_EN, shifted_alphabet, other_symbols, text_in, text_in_symbols, number_step, select_lang, type, text_out, temp;

	//Получение введенного текста
	text_in = document.getElementById("input-text").value.toLowerCase();

	//Деление введенного текста на отдельные единичные символы
	text_in_symbols = text_in.split("");

	//Получение выбранного языка
	select_lang = document.getElementById("select-lang").value;

	//Строки символов для которых будет применен шифр Цезаря
	alphabet_RU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
	alphabet_EN = "abcdefghijklmnopqrstuvwxyz";

	//Выбор строки символов для которой будет применен шифр Цезаря в зависимости от выбранного языка
	if(select_lang == 0){
		alphabet = alphabet_RU;
	}
	else{
		alphabet = alphabet_EN;
	}

	//Строка символов для которых не будет применен шифр Цезаря
	other_symbols = '№0123456789;°∑√-—+=~\"\'#$%&*`^@:«<_>»?/![{(|)}].\,\\\ ';

	//Получение числа сдвига
	number_step = document.getElementById("input-number").value;

	//Установление границы для сдвига
	if(number_step > alphabet.length){
		document.getElementById("input-number").value = alphabet.length;
		number_step = alphabet.length;
	}
	if(number_step < alphabet.length * -1){
		document.getElementById("input-number").value = alphabet.length * -1;
		number_step = alphabet.length * -1;
	}

	//Шифровать или расшифровать?
	type = document.getElementById("type").value;
	if(type == 1){
		number_step = number_step * -1;
	}

	//Алгоритм шифрования/расшифрования
	shifted_alphabet = alphabet.slice(number_step);
	shifted_alphabet += alphabet.slice(0, number_step);
	shifted_alphabet += other_symbols;
	alphabet += other_symbols;
	text_out = "";
	for(i = 0; i < text_in_symbols.length; i++){
		temp = alphabet.indexOf(text_in_symbols[i]);
		text_out += shifted_alphabet[temp];
	}

	//Вывод результата
	if(text_out.indexOf('undefined') == 0 || text_out.indexOf('undefined') != -1){
		document.getElementById("text_out").textContent = "Возникла ошибка, возможно имеется символ который не поддерживается";
	}
	else{
		document.getElementById("text_out").textContent = text_out;
	}
}