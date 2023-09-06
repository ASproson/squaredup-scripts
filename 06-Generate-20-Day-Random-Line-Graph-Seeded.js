async function getData(params, api) {

    let seed = 56456234;
    const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    const demoData = [];

    function generateData(serviceName) {
        const startDate = new Date('2023-01-01T00:00:00.000Z');
        let currentDate = new Date(startDate);


        for (let i = 0; i < 20; i++) {
            demoData.push({
                service: serviceName,
                currency: 'usd', 
                date: currentDate.toISOString(),
                cost: random() * 100
            });

            currentDate.setDate(currentDate.getDate() + 1); 
        }
    }

    generateData('DataOne');
    generateData('DataTwo');

    return demoData
}
