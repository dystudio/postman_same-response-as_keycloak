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
                // pm.expect is a generic assertion function
                // (source: https://learning.getpostman.com/docs/postman/scripts/postman_sandbox_api_reference)
                pm.expect(currentResponse).to.eql(expectedResponse);
            });
        }
    }

}

pm.environment.set("storeAndCompareGlobals2", storeAndCompareGlobals.toString());
