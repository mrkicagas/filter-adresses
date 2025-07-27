import { Actor } from 'apify';

await Actor.init();

const input = await Actor.getInput(); // Input should contain datasetId
const datasetId = input.datasetId;

const dataset = await Actor.openDataset(datasetId);
const items = await dataset.getData();

const filtered = items.items.filter(item => !item.website || item.website.trim() === '');

await Actor.pushData(filtered);

await Actor.exit();
