var assertResponseStatusIs200 = () => {

    pm.test(pm.info.requestName.replace(/ /g, '')+'_status', function() {
        pm.response.to.have.status(200);
        pm.response.to.be.ok;
    });

}

pm.environment.set("assertResponseStatusIs200", assertResponseStatusIs200.toString());
