# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">APIError</a></code>
- <code><a href="./src/resources/search.ts">SearchResponse</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">create</a>({ ...params }) -> SearchResponse</code>
- <code title="get /v1/search">client.search.<a href="./src/resources/search.ts">retrieve</a>({ ...params }) -> SearchResponse</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatMessage</a></code>
- <code><a href="./src/resources/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>

# Evaluations

Types:

- <code><a href="./src/resources/evaluations.ts">EvaluationRecordResponse</a></code>

Methods:

- <code title="post /v1/evaluations">client.evaluations.<a href="./src/resources/evaluations.ts">record</a>({ ...params }) -> EvaluationRecordResponse</code>

# Threads

Types:

- <code><a href="./src/resources/threads/threads.ts">CreateThread</a></code>
- <code><a href="./src/resources/threads/threads.ts">RunError</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadDto</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadList</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadWithMessages</a></code>
- <code><a href="./src/resources/threads/threads.ts">UpdateThread</a></code>

Methods:

- <code title="post /threads">client.threads.<a href="./src/resources/threads/threads.ts">create</a>({ ...params }) -> ThreadWithMessages</code>
- <code title="get /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">retrieve</a>(threadID, { ...params }) -> ThreadWithMessages</code>
- <code title="patch /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">update</a>(threadID, { ...params }) -> ThreadDto</code>
- <code title="get /threads">client.threads.<a href="./src/resources/threads/threads.ts">list</a>({ ...params }) -> ThreadList</code>
- <code title="delete /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">delete</a>(threadID, { ...params }) -> void</code>

## GenerateName

Methods:

- <code title="post /threads/{thread_id}/generate-name">client.threads.generateName.<a href="./src/resources/threads/generate-name.ts">generateName</a>(threadID, { ...params }) -> ThreadDto</code>

## Messages

Types:

- <code><a href="./src/resources/threads/messages/messages.ts">MessageDto</a></code>
- <code><a href="./src/resources/threads/messages/messages.ts">MessageList</a></code>

Methods:

- <code title="get /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages/messages.ts">retrieve</a>(messageID, { ...params }) -> MessageDto</code>
- <code title="get /threads/{thread_id}/messages">client.threads.messages.<a href="./src/resources/threads/messages/messages.ts">list</a>(threadID, { ...params }) -> MessageList</code>

### Suggestions

Types:

- <code><a href="./src/resources/threads/messages/suggestions.ts">GenerateSuggestions</a></code>
- <code><a href="./src/resources/threads/messages/suggestions.ts">SuggestionList</a></code>

Methods:

- <code title="post /threads/{thread_id}/messages/{message_id}/suggestions">client.threads.messages.suggestions.<a href="./src/resources/threads/messages/suggestions.ts">create</a>(messageID, { ...params }) -> SuggestionList</code>
- <code title="get /threads/{thread_id}/messages/{message_id}/suggestions">client.threads.messages.suggestions.<a href="./src/resources/threads/messages/suggestions.ts">list</a>(messageID, { ...params }) -> SuggestionList</code>

## Runs

Types:

- <code><a href="./src/resources/threads/runs.ts">CancelRun</a></code>
- <code><a href="./src/resources/threads/runs.ts">ComponentDef</a></code>
- <code><a href="./src/resources/threads/runs.ts">CreateRun</a></code>
- <code><a href="./src/resources/threads/runs.ts">CreateThreadAndRun</a></code>
- <code><a href="./src/resources/threads/runs.ts">InputMessage</a></code>
- <code><a href="./src/resources/threads/runs.ts">ToolDef</a></code>
- <code><a href="./src/resources/threads/runs.ts">RunCreateResponse</a></code>

Methods:

- <code title="post /threads/{thread_id}/runs">client.threads.runs.<a href="./src/resources/threads/runs.ts">create</a>(threadID, { ...params }) -> unknown</code>
- <code title="delete /threads/{thread_id}/runs/{run_id}">client.threads.runs.<a href="./src/resources/threads/runs.ts">delete</a>(runID, { ...params }) -> CancelRun</code>

## Components

### State

Types:

- <code><a href="./src/resources/threads/components/state.ts">ComponentState</a></code>
- <code><a href="./src/resources/threads/components/state.ts">UpdateComponentState</a></code>

Methods:

- <code title="post /threads/{thread_id}/components/{component_id}/state">client.threads.components.state.<a href="./src/resources/threads/components/state.ts">create</a>(componentID, { ...params }) -> ComponentState</code>

## Elicitation

Types:

- <code><a href="./src/resources/threads/elicitation.ts">ElicitationResponse</a></code>
- <code><a href="./src/resources/threads/elicitation.ts">ElicitationResponseRequest</a></code>

Methods:

- <code title="post /threads/{thread_id}/elicitation">client.threads.elicitation.<a href="./src/resources/threads/elicitation.ts">create</a>(threadID, { ...params }) -> ElicitationResponse</code>

# Categories

Types:

- <code><a href="./src/resources/categories/categories.ts">CategoryListAllResponse</a></code>
- <code><a href="./src/resources/categories/categories.ts">CategoryListTopResponse</a></code>
- <code><a href="./src/resources/categories/categories.ts">CategoryRetrieveProductsResponse</a></code>

Methods:

- <code title="get /v1/categories/all">client.categories.<a href="./src/resources/categories/categories.ts">listAll</a>() -> unknown</code>
- <code title="get /v1/categories/top">client.categories.<a href="./src/resources/categories/categories.ts">listTop</a>({ ...params }) -> unknown</code>
- <code title="get /v1/categories/{category_id}/products">client.categories.<a href="./src/resources/categories/categories.ts">retrieveProducts</a>(categoryID, { ...params }) -> unknown</code>

## Children

Types:

- <code><a href="./src/resources/categories/children.ts">ChildListResponse</a></code>
- <code><a href="./src/resources/categories/children.ts">ChildListByNameResponse</a></code>

Methods:

- <code title="get /v1/categories/{category_id}/children">client.categories.children.<a href="./src/resources/categories/children.ts">list</a>(categoryID) -> unknown</code>
- <code title="get /v1/categories/children">client.categories.children.<a href="./src/resources/categories/children.ts">listByName</a>({ ...params }) -> unknown</code>
