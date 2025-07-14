# 12213586
# AffordMed Full Stack Campus Evaluation

##  Folder Structure

- `frontend-test/` — React + TypeScript with Material UI. Includes frontend for average calculator.
- `backend-test/` — Express + TypeScript. API: `/average`
- `logging-middleware/` — Reusable `log()` function for frontend & backend.
- `screenshots/` — Required output screenshots.

---

##  API Documentation

### `POST /average`

- **Request Body:**
```json
{
  "numbers": [10, 20, 30]
}
