import test from 'ava';
import {word} from '../word'


test('my passing test', async t => {
	t.pass();
});

test('my passing test', async t => {
	const expected = "Hello World"
	const result = word()
	t.is(result, expected)
});
