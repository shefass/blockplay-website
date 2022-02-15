// Node to use
import { NODEToUse } from "../globalParameters";

// Signum.js
import { ApiSettings, composeApi } from "@signumjs/core";

// Setup signumjs connection
const apiSettings = new ApiSettings(NODEToUse);
const api = composeApi(apiSettings);

export default api;
