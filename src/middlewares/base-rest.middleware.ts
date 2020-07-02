import express from 'express';

export default class BaseRestMiddleware {
    private delegate: any;

    constructor() {
      this.delegate = express.json;
    }

    action(options: any): any {
      return this.delegate(options);
    }
}
