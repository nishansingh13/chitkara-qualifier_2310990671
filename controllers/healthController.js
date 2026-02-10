const EMAIL = "nishan0671.be23@chitkara.edu.in";

const healthController = {
  getHealth: (req, res) => {
    res.json({
      is_success: true,
      official_email: EMAIL
    });
  }
};

export { healthController, EMAIL };
