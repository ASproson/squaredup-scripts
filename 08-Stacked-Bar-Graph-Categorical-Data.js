async function getData(params, api) {
    const categories = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberries', 'Mango', 'Pineapple', 'Kiwi', 'Watermelon', 'Peach', 'Pear', 'Cherry', 'Blueberry', 'Raspberry', 'Blackberry', 'Plum', 'Lemon', 'Lime', 'Coconut'];

    const demoData = categories.map((product) => ({
        product: product, // x-axis
        currency: 'usd', // y-axis
        cost: Math.floor(Math.random() * 200) + 50, // Random cost for each product
    }));

    return demoData;
}
