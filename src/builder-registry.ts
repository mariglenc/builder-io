import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/TermsAndConditions/TermsAndConditions")),
  {
    name: "TermsAndConditionsFooter",
    inputs: [
      { name: "price", type: "number", defaultValue: 50 },
      { name: "trialPrice", type: "number", defaultValue: 300 },
      { name: "currency", type: "string", defaultValue: "Euro" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Footer")),
  {
    name: "Footer",
    inputs: [
      { name: "title", type: "string", defaultValue: "this is the footer" },
      { name: "color", type: "color", defaultValue: "red" },
    ],
  }
);
