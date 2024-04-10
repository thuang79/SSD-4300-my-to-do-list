import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "my-to-do-list",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
