module.exports = {
  // method of operation
  get: {
    tags: ["Oms-CRUD operations"], // operation's tag.
    description: "Get todos", // operation's desc.
    operationId: "getTodos", // unique operation id.
    parameters: [], // expected params.
    // expected responses
    responses: {
      // response code
      200: {
        description: "Todos were obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Todo", // Todo model
            },
          },
        },
      },
    },
  },

  // method of operation
  post: {
    tags: ["Oms-CRUD operations"], // operation's tag
    description: "Create todo", // short desc
    operationId: "createTodo", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TodoInput", // todo input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "Todo created successfully", // response desc
      },
      // response code
      500: {
        description: "Server error", // response desc
      },
    },
  },
};