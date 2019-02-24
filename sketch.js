function setup() {

	const values = [];

	for (let i = 0; i < 15; i++) {
		values[i] = Math.floor(Math.random(0, 100) * 100);
	}

	const shape = [3, 5];

	const dataA = tf.tensor2d(values, shape);

	const data = dataA.add(dataA);

	data.print();

	data.data().then(function (r) {
		console.log(r);
	});

	console.log(data.dataSync(data));
}

setup();