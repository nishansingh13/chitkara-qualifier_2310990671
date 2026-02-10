import { fibonacci, isPrime, hcf, lcm } from "../utils/math.js";
import { askAI } from "../utils/ai.js";
import { EMAIL } from "./healthController.js";

const operationsController = {
  processBfhl: async (req, res) => {
    try {
      const body = req.body;
      if (!body || typeof body !== 'object') {
        return res.status(400).json({
          is_success: false,
          official_email: EMAIL,
          error: "Request body must be a valid JSON object"
        });
      }

      const keys = Object.keys(body);

      if (keys.length === 0) {
        return res.status(400).json({
          is_success: false,
          official_email: EMAIL,
          error: "Request body cannot be empty"
        });
      }

      if (keys.length !== 1) {
        return res.status(400).json({
          is_success: false,
          official_email: EMAIL,
          error: "Exactly one key required"
        });
      }

      let data;
      const validKeys = ['fibonacci', 'prime', 'hcf', 'lcm', 'AI'];
      const key = keys[0];

      if (!validKeys.includes(key)) {
        return res.status(400).json({
          is_success: false,
          official_email: EMAIL,
          error: `Invalid key. Allowed keys: ${validKeys.join(', ')}`
        });
      }

      if (body.fibonacci !== undefined) {
        if (!Number.isInteger(body.fibonacci) || body.fibonacci < 0) {
          throw new Error("Fibonacci input must be a non-negative integer");
        }
        data = fibonacci(body.fibonacci);

      } else if (body.prime !== undefined) {
        if (!Array.isArray(body.prime)) {
          throw new Error("Prime input must be an array");
        }
        if (body.prime.length === 0) {
          throw new Error("Prime array cannot be empty");
        }
        if (body.prime.length > 100) {
          throw new Error("Prime array size must not exceed 100");
        }
        if (!body.prime.every(x => Number.isInteger(x) && x >= 0)) {
          throw new Error("All prime array elements must be non-negative integers");
        }
        data = body.prime.filter(isPrime);

      } else if (body.hcf !== undefined) {
        if (!Array.isArray(body.hcf)) {
          throw new Error("HCF input must be an array");
        }
        data = hcf(body.hcf);

      } else if (body.lcm !== undefined) {
        if (!Array.isArray(body.lcm)) {
          throw new Error("LCM input must be an array");
        }
        data = lcm(body.lcm);

      } else if (body.AI !== undefined) {
        if (typeof body.AI !== "string") {
          throw new Error("AI input must be a string");
        }
        if (body.AI.trim().length === 0) {
          throw new Error("AI input cannot be empty");
        }
        if (body.AI.length > 1000) {
          throw new Error("AI input must not exceed 1000 characters");
        }
        data = await askAI(body.AI);
      }

      res.json({
        is_success: true,
        official_email: EMAIL,
        data
      });

    } catch (err) {
      const statusCode = err.message.includes('API') || err.message.includes('timeout') ? 500 : 400;
      res.status(statusCode).json({
        is_success: false,
        official_email: EMAIL,
        error: err.message
      });
    }
  }
};

export { operationsController };
