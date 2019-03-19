var assertKeycloakLogout = () => {

    pm.test(pm.info.requestName.replace(/ /g, '')+'_status', function() {
        pm.response.to.have.status(204);
        pm.response.to.have.status("No Content");
    });

}

pm.environment.set("assertKeycloakLogout", assertKeycloakLogout.toString());
