import { fibonacci, isPrime, hcf, lcm } from "../utils/math.js";
import { askAI } from "../utils/ai.js";
import { EMAIL } from "./healthController.js";

const operationsController = {
  processBfhl: async (req, res) => {
    try {
      const body = req.body;
      const keys = Object.keys(body);

      if (keys.length !== 1) {
        return res.status(400).json({
          is_success: false,
          official_email: EMAIL,
          error: "Exactly one key required"
        });
      }

      let data;

      if (body.fibonacci !== undefined) {
        if (!Number.isInteger(body.fibonacci)) {
          throw new Error("Invalid fibonacci input");
        }
        data = fibonacci(body.fibonacci);

      } else if (body.prime !== undefined) {
        if (!Array.isArray(body.prime)) {
          throw new Error("Invalid prime input");
        }
        data = body.prime.filter(isPrime);

      } else if (body.hcf !== undefined) {
        if (!Array.isArray(body.hcf)) {
          throw new Error("Invalid hcf input");
        }
        data = hcf(body.hcf);

      } else if (body.lcm !== undefined) {
        if (!Array.isArray(body.lcm)) {
          throw new Error("Invalid lcm input");
        }
        data = lcm(body.lcm);

      } else if (body.AI !== undefined) {
        if (typeof body.AI !== "string") {
          throw new Error("Invalid AI input");
        }
        data = await askAI(body.AI);

      } else {
        throw new Error("Invalid key");
      }

      res.json({
        is_success: true,
        official_email: EMAIL,
        data
      });

    } catch (err) {
      res.status(400).json({
        is_success: false,
        official_email: EMAIL,
        error: err.message
      });
    }
  }
};

export { operationsController };
