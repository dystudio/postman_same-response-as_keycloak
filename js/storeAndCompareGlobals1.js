var storeAndCompareGlobals = () => {

    if (pm.response.text() !== "")
    {
        const responseKey = pm.info.requestName.replace(/ /g, '')+'_response';
        let currentResponse = '';
        try {
            currentResponse = JSON.stringify(pm.response.json());
        } catch(e) {
            currentResponse = pm.response.text();
        }

        if (!pm.globals.has(responseKey) || !pm.globals.get(responseKey) || pm.globals.get(responseKey) === "")
        {
            pm.globals.set(responseKey, currentResponse);
        }
        else
        {
            pm.test(responseKey, function () {
                const expectedResponse = pm.globals.get(responseKey);
                // pm.response.to.be object allows you to easily assert a set of pre-defined rules
                // (source: https://learning.getpostman.com/docs/postman/scripts/postman_sandbox_api_reference)
                pm.response.to.have.body(expectedResponse);
            });
        }
    }

}

pm.environment.set("storeAndCompareGlobals1", storeAndCompareGlobals.toString());
