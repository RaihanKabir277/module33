
const user = {id: 1, name: 'Gorib amir', job: 'actor'};

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'

    },
    products: ['laptop', 'mic', 'monitor', 'keybord'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
