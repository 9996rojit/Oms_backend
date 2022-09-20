module.exports = {
  components: {
    schemas: {
      // id model
      id: {
        type: "string", // data type
        description: "An id of a todo", // desc
        example: "tyVgf", // example of an id
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};