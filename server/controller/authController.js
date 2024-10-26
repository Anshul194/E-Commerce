const { signup, login } = require('../services/authService');
const { userSchema, loginSchema } = require('../validation/userValidation');

const signupController = async (req, res) => {
  try {
    // Validate request body
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    // Call signup service
    const result = await signup(req.body);

    if (result.success) {
      // Create JWT token
      const token = result.data.token;

      // Set token in a cookie
      res.cookie('token', token, {
        httpOnly: true, // Accessible only by web server
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Helps prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
    }

    return res.status(result.success ? 201 : 400).json(result);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
      data: null,
    });
  }
};

const loginController = async (req, res) => {
  try {
    // Validate request body
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        data: null,
      });
    }

    // Call login service
    const result = await login(req.body.email, req.body.password);

    if (result.success) {
      // Create JWT token
      const token = result.data.token;

      // Set token in a cookie
      res.cookie('token', token, {
        httpOnly: true, // Accessible only by web server
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Helps prevent CSRF attacks
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
    }

    return res.status(result.success ? 200 : 401).json(result);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
      data: null,
    });
  }
};

module.exports = { signupController, loginController };
