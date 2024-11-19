import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class IndexController extends Controller {
  @service current;

  changeLanguage = ({ target: { value: language } }) => {
    this.current.language = language;
  };
}
