import { ConfigFactory } from '@nestjs/config';

import infrastructureFactory from "./infrastructure";

const configFactory: ConfigFactory = () => Object.freeze({
  ...infrastructureFactory()
});

export default configFactory;