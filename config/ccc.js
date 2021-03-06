dicomWebServers = {
  servers: {
    dicomWeb: [
      {
        name: "DCM4CHEE",
        wadoUriRoot:
          "https://cancer.crowds-cure.org/dcm4chee-arc/aets/DCM4CHEE/wado",
        qidoRoot:
          "https://cancer.crowds-cure.org/dcm4chee-arc/aets/DCM4CHEE/rs",
        wadoRoot:
          "https://cancer.crowds-cure.org/dcm4chee-arc/aets/DCM4CHEE/rs",
        qidoSupportsIncludeField: true,
        imageRendering: "wadors",
        thumbnailRendering: "wadors",
        requestOptions: {
          requestFromBrowser: true
        }
      }
    ]
  },
  oidc: [
    {
      authServerUrl: "https://cancer.crowds-cure.org/auth/realms/dcm4che",
      authRedirectUri: "http://localhost:5000/callback",
      clientId: "crowds-cure-cancer",
      postLogoutRedirectUri: "http://localhost:5000/logout-redirect.html",
      responseType: "id_token token",
      scope: "email profile openid",
      revokeAccessTokenOnSignout: true,
      extraQueryParams: {
        kc_idp_hint: "crowds-cure-cancer-auth0-oidc",
        client_id: "crowds-cure-cancer"
      }
    }
  ]
}
