import Helper from '@ember/component/helper';
import { service } from '@ember/service';

export default class Translate extends Helper {
  @service current;

  compute() {
    // const [word] = positional[0];
    switch (this.current.language) {
      case 'es':
        return 'Mariposa';
      case 'fr':
        return 'Papillon';
      case 'cat':
        return 'Papallona';
      case 'it':
        return 'Farfalla';
      case 'se':
        return 'Fjäril';
      case 'hu':
        return 'pillangó';
      default:
        return 'Butterfly';
    }
  }
}
