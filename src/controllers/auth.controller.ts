import type { Request, Response } from 'express';

import UserService from '../services/auth.service';
import authService from '../services/auth.service';

import type { LoginUserDto, RegisterUserDto } from '../dtos/user.dtos';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const data: RegisterUserDto = req.body;

      const user = await UserService.register(data);

      return res.status(201).json({
        data: user,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data: LoginUserDto = req.body;

      const user = await authService.login(data);

      if (!user) {
        return res.status(401).json({ error: 'Usuario/contraseña incorrecto' });
      }

      return res.status(200).json({ data: user });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new AuthController();
