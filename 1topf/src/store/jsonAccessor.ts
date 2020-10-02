import * as veggies from '../../../veggie.json';
import * as legumes from '../../../legume.json';
import * as grains from '../../../grains.json';
import * as additionals from '../../../additionals.json';

const loadVeggies = () => veggies.Veggies;

const loadLegumes = () => legumes.Legumes;

const loadGrains = () => grains.Grains;

const loadAdditionals = () => additionals.Additionals;

export {
  loadVeggies, loadLegumes, loadGrains, loadAdditionals,
};
