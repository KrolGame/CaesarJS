function S(){

	//Declaration of variables
	var i, alphabet, alphabet_RU, alphabet_EN, shifted_alphabet, other_symbols, text_in, text_in_symbols, number_step, select_lang, type, text_out, temp;

	//Getting the written text
	text_in = document.getElementById("input-text").value.toLowerCase();

	//Splitting the written text into single symbols
	text_in_symbols = text_in.split("");

	//Getting the selected language
	select_lang = document.getElementById("select-lang").value;

	//Strings of symbols for which the Caesar shift will be applied
	alphabet_EN = "abcdefghijklmnopqrstuvwxyz";
	alphabet_RU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

	//Select the string of symbol to use the Caesar shift for depending on the selected language
	if(select_lang == 0){
		alphabet = alphabet_EN;
	}
	else{
		alphabet = alphabet_RU;
	}

	//A string of symbols for which the Caesar shift will not be applied
	other_symbols = '№0123456789;°∑√-—+=~\"\'#$%&*`^@:«<_>»?/![{(|)}].\,\\\ ';

	//Getting the shift number
	number_step = document.getElementById("input-number").value;

	//Setting a boundary for a shift
	if(number_step > alphabet.length){
		document.getElementById("input-number").value = alphabet.length;
		number_step = alphabet.length;
	}
	if(number_step < alphabet.length * -1){
		document.getElementById("input-number").value = alphabet.length * -1;
		number_step = alphabet.length * -1;
	}

	//Encrypt or decrypt?
	type = document.getElementById("type").value;
	if(type == 1){
		number_step = number_step * -1;
	}

	//Encryption/decryption algorithm
	shifted_alphabet = alphabet.slice(number_step);
	shifted_alphabet += alphabet.slice(0, number_step);
	shifted_alphabet += other_symbols;
	alphabet += other_symbols;
	text_out = "";
	for(i = 0; i < text_in_symbols.length; i++){
		temp = alphabet.indexOf(text_in_symbols[i]);
		text_out += shifted_alphabet[temp];
	}

	//Output result
	if(text_out.indexOf('undefined') == 0 || text_out.indexOf('undefined') != -1){
		document.getElementById("text_out").textContent = "An error occurred, there may be a symbol that is not supported";
	}
	else{
		document.getElementById("text_out").textContent = text_out;
	}
}