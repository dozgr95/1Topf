import * as veggies from '../../../veggie.json';
import * as legumes from '../../../legume.json';
import * as grains from '../../../grains.json';
import * as liquids from '../../../liquid.json';
import * as spices from '../../../spice.json';

const loadVeggies = () => veggies.Veggies;

const loadLegumes = () => legumes.Legumes;

const loadGrains = () => grains.Grains;

const loadLiquids = () => liquids.Liquids;

const loadSpices = () => spices.Spices;

export {
  loadVeggies, loadLegumes, loadGrains, loadLiquids, loadSpices,
};
