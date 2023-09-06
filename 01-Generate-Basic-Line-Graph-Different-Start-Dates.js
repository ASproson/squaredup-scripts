async function getData(params, api) {

    const demoData = [
        {
            service: 'DataOne',       // x-axis
            currency: 'usd',          // y-axis
            date: '2023-01-01T00:00:00.000Z',
            cost: 100
        },
            {
            service: 'DataOne',       // x-axis
            currency: 'usd',          // y-axis
            date: '2023-02-01T00:00:00.000Z',
            cost: 150
        },
        {
            service: 'DataOne',       // x-axis
            currency: 'usd',          // y-axis
            date: '2023-03-01T00:00:00.000Z',
            cost: 115
        },
        {
            service: 'DataTwo',       // x-axis
            currency: 'usd',          // y-axis
            date: '2023-02-01T00:00:00.000Z',
            cost: 200
        },
            {
            service: 'DataTwo',       // x-axis
            currency: 'usd',          // y-axis
            date: '2023-03-02T00:00:00.000Z',
            cost: 250
        },
    ]

    return demoData
}
