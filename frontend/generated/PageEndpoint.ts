import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type PageContent_1 from "./com/example/cms/PageContent.js";
import client_1 from "./connect-client.default.js";
async function autoGenerateAndPublish_1(prompt: string | undefined, fileMeta: string | undefined, base64Image: string | undefined, init?: EndpointRequestInit_1): Promise<PageContent_1 | undefined> { return client_1.call("PageEndpoint", "autoGenerateAndPublish", { prompt, fileMeta, base64Image }, init); }
async function generatePage_1(prompt: string | undefined, fileMeta: string | undefined, init?: EndpointRequestInit_1): Promise<string | undefined> { return client_1.call("PageEndpoint", "generatePage", { prompt, fileMeta }, init); }
async function getPageBySlug_1(slug: string | undefined, init?: EndpointRequestInit_1): Promise<PageContent_1 | undefined> { return client_1.call("PageEndpoint", "getPageBySlug", { slug }, init); }
async function savePage_1(page: PageContent_1 | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("PageEndpoint", "savePage", { page }, init); }
export { autoGenerateAndPublish_1 as autoGenerateAndPublish, generatePage_1 as generatePage, getPageBySlug_1 as getPageBySlug, savePage_1 as savePage };
