import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

export function formatPrice(price) {
  return numeral(price).format('$ 0,0.00');
}
