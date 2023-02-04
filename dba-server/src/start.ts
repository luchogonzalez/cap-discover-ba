import cds from "@sap/cds";

export default class Bootstrap {
    public async start() {
        await cds.connect.to('db');
    }
}