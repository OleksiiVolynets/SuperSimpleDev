import dayjs from 'https://esm.sh/dayjs';
import goodDate from './data_function.js'


const a = dayjs();
console.log(a.add(7, 'day').format('MMMM DD'));
console.log(a.add(1, 'month').format('MMMM DD'));
console.log(a.subtract(1, 'month').format('MMMM DD'));
console.log(a.format('dddd'));
console.log(goodDate(a))