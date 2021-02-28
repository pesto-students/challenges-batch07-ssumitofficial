const allSettled = args => {
    if (!args || args.length === 0) {
        return [];
    }

    return new Promise(resolve => {
        const allPromiseStatus = [];
        let counter = 0;

        args.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    allPromiseStatus[index] = { status: 'fulfilled', value };
                })
                .catch(error => {
                    allPromiseStatus[index] = {status: 'rejected', 'reason': `Error: ${error.message}` };
                })
                .finally(() => {
                    counter++;
                    if (counter == args.length) {
                        resolve(allPromiseStatus)
                    }
                });
        });
    });
}

export { allSettled };
