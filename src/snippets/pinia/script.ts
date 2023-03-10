import { XSnippetDefinition } from "../../models/app.ts";

export const script: XSnippetDefinition = {
  meta: {
    title: "Pinia",
  },
  snippets: {
    pstore: {
      name: "Setup Pinia store",
      body: [
        "import { acceptHMRUpdate, defineStore } from 'pinia'",
        "",
        "export const use${1/(.*)/${1:/capitalize}/} = defineStore('${2:key}', () => {",
        "\t$0",
        "\t",
        "\treturn {",
        "\t ",
        "\t}",
        "})",
        "",
        "if (import.meta.hot)",
        "\timport.meta.hot.accept(acceptHMRUpdate(use${1/(.*)/${1:/capitalize}/}, import.meta.hot))",
        "",
      ],
    },
    "pstore:options": {
      name: "Setup Pinia store (Options)",
      body: [
        "import { acceptHMRUpdate, defineStore } from 'pinia'",
        "",
        "export const use${1/(.*)/${1:/capitalize}/} = defineStore('${2:key}', {",
        "\tstate: () => ({",
        "\t\t",
        "\t}),",
        "\tgetters: {",
        "\t\t",
        "\t},",
        "\tactions: {",
        "\t\t",
        "\t},",
        "})",
        "",
        "if (import.meta.hot)",
        "\timport.meta.hot.accept(acceptHMRUpdate(use$1, import.meta.hot))",
        "",
      ],
    },
    vuseStore: {
      name: "Use store",
      body: "const ${2:$1Store} = use${1/(.*)/${1:/capitalize}/}Store()",
      alt: ["vus"],
    },
  },
};
