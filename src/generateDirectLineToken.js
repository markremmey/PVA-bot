const fetch = require("node-fetch");

// Generates a new Direct Line token given the secret.
module.exports = async function generateDirectLineToken(botId, botTenantId) {
  // // You should consider using Enhanced Direct Line Authentication to protect the user ID.
  // // https://blog.botframework.com/2018/09/25/enhanced-direct-line-authentication-features/
  
  // // The URL host in which to generate the Direct Line token is subject to change based off of environment.
   // The host should be consistent to the host that you are building your Power VA.
  //const response = await fetch('https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=' + botId + '&tenantId=' + botTenantId, {method: "GET"});
  const response = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', {
    method: "POST",
    headers: {
      'Authorization': 'Bearer ' + process.env.DIRECT_LINE_SECRET,
    }
  });
  
  const { token } = await response.json();
  // const { token } = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ii1FMmRMMlhXZ2tCSTNmLV93MTNrWUE0YXBXTSIsIng1dCI6Ii1FMmRMMlhXZ2tCSTNmLV93MTNrWUE0YXBXTSIsInR5cCI6IkpXVCJ9.eyJib3QiOiIzN2M4YTcyMS02ZjViLTQ2NzMtODM5NC1hZWIzMzlmYjI5NzAiLCJzaXRlIjoibFF1dHEyelVRaWMiLCJjb252IjoiTDRkeEZEY0FidkpDMXo2TkVvcGlYTC11cyIsIm5iZiI6MTY3ODQ5OTM5NywiZXhwIjoxNjc4NTAyOTk3LCJpc3MiOiJodHRwczovL2RpcmVjdGxpbmUuYm90ZnJhbWV3b3JrLmNvbS8iLCJhdWQiOiJodHRwczovL2RpcmVjdGxpbmUuYm90ZnJhbWV3b3JrLmNvbS8ifQ.an7aTeNw32hMw3swB4UAfB5M4M0QN13yDcQWTp8j-p0yP4b5BqyIpmgK9Lpr18xI310wW4PHEjDQHCgmAoKZcgvtllvqt4K2ijWJPrCNc5Lk44iyylxHts66tReyPkejbqjaenqVANC4Ise_Rjrxa0NuPKHhaaQjZ2miUF2Z8yu2OHsjIr4h7dlbvNieuR042WrWtCmM5kDQFYAEDN6w6OxlimX0cXSR6S-NEJnSg4dMOYBFcGNF28WVvGOUsSTwrTNdi4TVoR__SjGTm9Kk46pSTgoh_nJLM5wtdqYOsQFAkBybxUki3kvgN0LdiFp1UUSLALQx-zyJthpaOHDBmQ"
  return token;
};



