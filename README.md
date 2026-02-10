# Chitkara Qualifier — BFHL Service

Short description
- Chitkara Qualifier 

**Quick Start**
- Install dependencies:

```bash
npm install
```

- Run the server (option A):

```bash
node server.js
```

- Or, if `package.json` defines a `start` script (option B):

```bash
npm start
```

- To run on a custom port:

```bash
PORT=3000 node server.js
```

The app reads environment variables from a `.env` file (via `dotenv`) if present.

**Prerequisites**
- Ensure `package.json` contains `"type": "module"` for `import` syntax.

**Environment**
- `PORT` — optional server port (defaults to `3000`)
- Any other app-specific keys can be placed in `.env`.

**API Endpoints**
- `GET /health` — health check endpoint (implemented in `routes/health.js` → `controllers/healthController.js`).
- `/bfhl` — operations router (mounted from `routes/operations.js` → handlers in `controllers/operationsController.js`).

Common response shape for errors and unknown routes (from `server.js`):
```json
{
  "is_success": false,
  "official_email": "nishan0671.be23@chitkara.edu.in",
  "error": "..."
}
```

Example: check health

```bash
curl -i http://localhost:3000/health
```

**Project Structure**
- `server.js` — application entry (express app, middleware, router mounts, error handlers).
- `routes/` — Express route definitions (`health.js`, `operations.js`).
- `controllers/` — request handlers (`healthController.js`, `operationsController.js`).
- `utils/` — helper modules (`ai.js`, `math.js`).
- `package.json` — project metadata and scripts.

**Notes & Developer Tips**
- Uses ES module `import` syntax. If you see an `ERR_REQUIRE_ESM` error, confirm `package.json` has `"type": "module"` or run with an appropriate Node version.
- Error and 404 handlers in `server.js` return JSON including the `official_email` constant. Use that address for contact/debugging: `nishan0671.be23@chitkara.edu.in`.
- To add tests or linting, add dev dependencies and scripts to `package.json` and document them here.

**Next steps / Suggestions**
- Add a small `README` section per endpoint describing request payloads and sample responses (once controllers' internals are finalized).
- Provide `npm` scripts in `package.json` for `start`, `dev` (e.g., `nodemon`), `test`.

**Contact**
- Official contact email: nishan0671.be23@chitkara.edu.in

