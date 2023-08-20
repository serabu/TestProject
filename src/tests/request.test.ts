// const makeRequest = require("./your-code");
// const mockServer = require("mockttp").getLocal();

// describe("makeRequest", () => {
//     beforeEach(() => mockServer.start());
//     afterEach(() => mockServer.stop());

//     it("resolves happily for successful requests", () => {
//         await mockServer.get("http://google.com").thenReply(200, "A mocked response");

//         // Here: configure your code to use mockServer.url as a proxy

//         let result = await makeRequest();

//         expect(response).to.equal('Connected to google');
//     });

//     it("rejects failed requests with an error", () => {
//         await mockServer.get("http://google.com").thenReply(500, "An error!");

//         // Here: configure your code to use mockServer.url as a proxy

//         let result = makeRequest();

//         expect(response).to.be.rejectedWith('Failed to connect to Google');
//     });
// });