const allPromises = args => {
    if (!args || args.length === 0) {
        return new Promise((resolve, reject) => {
            reject();
        });
    }

    return new Promise(resolve => {
        const promiseResponses = [];
        let counter = 0;
        args.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    promiseResponses[index] = result;
                })
                .catch(error => { })
                .finally(() => {
                    counter++;
                    if (counter === args.length) {
                        resolve(promiseResponses);
                    }
                });
        });
    });

};

export { allPromises };