const fetch = require("node-fetch");

// Generates a new Direct Line token given the secret.
module.exports = async function generateDirectLineToken(botId, botTenantId) {
  // // You should consider using Enhanced Direct Line Authentication to protect the user ID.
  // // https://blog.botframework.com/2018/09/25/enhanced-direct-line-authentication-features/
  
  // // The URL host in which to generate the Direct Line token is subject to change based off of environment.
  // // The host should be consistent to the host that you are building your Power VA.
  // const response = await fetch('https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=' + botId + '&tenantId=' + botTenantId, {method: "GET"});
  const response = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', {
    method: "POST",
    headers: {
      'Authorization': 'Bearer ' + process.env.DIRECT_LINE_SECRET,
    }
  });
  
  const { token } = await response.json();
  
  return token;
};



