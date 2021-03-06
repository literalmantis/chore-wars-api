process.env.TZ = "UCT";
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "whoof-arted";
process.env.JWT_EXPIRY = "3m";

require("dotenv").config();

process.env.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL ||
  "postgresql://postgres:password@localhost/chorewars-test";
const { expect } = require("chai");
const supertest = require("supertest");

global.expect = expect;
global.supertest = supertest;
