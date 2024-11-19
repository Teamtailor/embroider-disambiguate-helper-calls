import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentService extends Service {
  @tracked language = 'en';
}
