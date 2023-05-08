// 숫자 속의 괴물
//

function deconstruct(number) {
	// number = sign * coefficient * (2 ** exponent)
	
	let sign = 1; // 부호
	let coefficient = number; // 계수
	let exponent = 0; // 지수

	// 계수의 부호를 제거합니다.:
	if (coefficient < 0) {
		coefficient = -coefficient;
		sign = -1;
	}

	// 계수가 0이 될때까지 2로 나누고, 나눈 횟수를 -1128에 더해서 지수를 구합니다.
	// -1128이라는 값은 Number.MIN_VALUE의 지수 값에서 유효 숫자의 비트 갯수,
	// 그리고 보너스 비트의 개수를 뺸 값입니다.
	if (Number.isFinite(number) && number !== 0) {
		exponent = -1128;
		let reduction = coefficient
		while (reduction !== 0) { // reduction 값이 0이 될떄 까지 실행.
			exponent += 1;
			reduction /= 2;
		}
	
		// 지수를 주입니다. 지수 값이 0이면 수가 정수 형태로 보일 것 입니다.
		reduction = exponent
		while (reduction < 0) {
			coefficient /= 2;
			reduction -= 1;
		}

		while (reduction < 0) {
			coefficient *= 2;
			reduction += 1;
		}
		
		return {
			sign,
			coefficient,
			exponent,
			number,
		};
	}
}

console.log('MAX_SAFE_INTEGER')

//console.log(deconstruct(Number.MAX_SAFE_INTEGER))

console.log('1')
console.log(deconstruct(1))

console.log('0.1')
console.log(deconstruct(0.1))
